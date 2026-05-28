import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

// Load R2 credentials if present
const r2AccessKeyId = (typeof process !== 'undefined' ? process.env.R2_ACCESS_KEY_ID : null) || import.meta.env.R2_ACCESS_KEY_ID;
const r2SecretAccessKey = (typeof process !== 'undefined' ? process.env.R2_SECRET_ACCESS_KEY : null) || import.meta.env.R2_SECRET_ACCESS_KEY;
const r2BucketName = (typeof process !== 'undefined' ? process.env.R2_BUCKET_NAME : null) || import.meta.env.R2_BUCKET_NAME;
const r2Endpoint = (typeof process !== 'undefined' ? process.env.R2_ENDPOINT : null) || import.meta.env.R2_ENDPOINT;
const r2PublicUrl = (typeof process !== 'undefined' ? process.env.R2_PUBLIC_URL : null) || import.meta.env.R2_PUBLIC_URL; // e.g., https://pub-xxxx.r2.dev

let s3Client = null;
const isR2Configured = !!(r2AccessKeyId && r2SecretAccessKey && r2BucketName && r2Endpoint);

if (isR2Configured) {
  s3Client = new S3Client({
    region: 'auto',
    endpoint: r2Endpoint,
    credentials: {
      accessKeyId: r2AccessKeyId,
      secretAccessKey: r2SecretAccessKey,
    },
  });
}

export class StorageService {
  /**
   * Uploads a file (Astro/Web File object) to storage.
   * @param {File} file - Web File API object
   * @returns {Promise<string>} The public URL or path of the uploaded file
   */
  static async uploadFile(file) {
    if (!file || file.size === 0) {
      throw new Error('Nenhum arquivo enviado ou arquivo está vazio.');
    }

    const fileExt = path.extname(file.name) || '.jpg';
    const uniqueFilename = `${crypto.randomUUID()}${fileExt}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (isR2Configured) {
      // Production Cloudflare R2 upload
      const contentType = file.type || 'image/jpeg';
      const command = new PutObjectCommand({
        Bucket: r2BucketName,
        Key: uniqueFilename,
        Body: buffer,
        ContentType: contentType,
      });

      await s3Client.send(command);

      // Return the public URL
      if (r2PublicUrl) {
        return `${r2PublicUrl.replace(/\/$/, '')}/${uniqueFilename}`;
      }
      return `${r2Endpoint.replace(/\/$/, '')}/${r2BucketName}/${uniqueFilename}`;
    } else {
      // Local development upload
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      
      // Ensure the directory exists
      await fs.mkdir(uploadDir, { recursive: true });
      
      const filePath = path.join(uploadDir, uniqueFilename);
      await fs.writeFile(filePath, buffer);
      
      // Return relative URL for dev server
      return `/uploads/${uniqueFilename}`;
    }
  }

  /**
   * Deletes a file from storage.
   * @param {string} fileUrlOrPath - The full URL or relative path of the file
   * @returns {Promise<void>}
   */
  static async deleteFile(fileUrlOrPath) {
    if (!fileUrlOrPath) return;

    if (isR2Configured) {
      // Extract key from R2 URL
      let key = fileUrlOrPath;
      if (r2PublicUrl && fileUrlOrPath.startsWith(r2PublicUrl)) {
        key = fileUrlOrPath.replace(r2PublicUrl, '').replace(/^\//, '');
      } else {
        const parts = fileUrlOrPath.split('/');
        key = parts[parts.length - 1];
      }

      try {
        const command = new DeleteObjectCommand({
          Bucket: r2BucketName,
          Key: key,
        });
        await s3Client.send(command);
      } catch (err) {
        console.error('Erro ao deletar arquivo do R2:', err);
      }
    } else {
      // Local dev delete
      if (fileUrlOrPath.startsWith('/uploads/')) {
        const filename = fileUrlOrPath.replace('/uploads/', '');
        const filePath = path.join(process.cwd(), 'public', 'uploads', filename);
        try {
          await fs.unlink(filePath);
        } catch (err) {
          // If file already deleted or doesn't exist, ignore
          if (err.code !== 'ENOENT') {
            console.error('Erro ao deletar arquivo local:', err);
          }
        }
      }
    }
  }
}
