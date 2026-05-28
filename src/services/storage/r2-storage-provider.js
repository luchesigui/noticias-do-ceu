import path from 'path';
import crypto from 'crypto';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { StorageProvider } from './storage-provider.js';

/**
 * Cloudflare R2 S3-Compatible Storage Provider (SOLID - Single Responsibility Principle)
 */
export class R2StorageProvider extends StorageProvider {
  constructor() {
    super();
    const r2AccessKeyId = (typeof process !== 'undefined' ? process.env.R2_ACCESS_KEY_ID : null) || import.meta.env.R2_ACCESS_KEY_ID;
    const r2SecretAccessKey = (typeof process !== 'undefined' ? process.env.R2_SECRET_ACCESS_KEY : null) || import.meta.env.R2_SECRET_ACCESS_KEY;
    
    this.bucketName = (typeof process !== 'undefined' ? process.env.R2_BUCKET_NAME : null) || import.meta.env.R2_BUCKET_NAME;
    this.endpoint = (typeof process !== 'undefined' ? process.env.R2_ENDPOINT : null) || import.meta.env.R2_ENDPOINT;
    this.publicUrl = (typeof process !== 'undefined' ? process.env.R2_PUBLIC_URL : null) || import.meta.env.R2_PUBLIC_URL;

    if (!r2AccessKeyId || !r2SecretAccessKey || !this.bucketName || !this.endpoint) {
      throw new Error('Credenciais do Cloudflare R2 não estão completamente configuradas.');
    }

    this.s3Client = new S3Client({
      region: 'auto',
      endpoint: this.endpoint,
      credentials: {
        accessKeyId: r2AccessKeyId,
        secretAccessKey: r2SecretAccessKey,
      },
    });
  }

  async upload(file) {
    if (!file || file.size === 0) {
      throw new Error('Nenhum arquivo enviado ou arquivo está vazio.');
    }

    const fileExt = path.extname(file.name) || '.jpg';
    const uniqueFilename = `${crypto.randomUUID()}${fileExt}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const contentType = file.type || 'image/jpeg';

    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: uniqueFilename,
      Body: buffer,
      ContentType: contentType,
    });

    await this.s3Client.send(command);

    if (this.publicUrl) {
      return `${this.publicUrl.replace(/\/$/, '')}/${uniqueFilename}`;
    }
    return `${this.endpoint.replace(/\/$/, '')}/${this.bucketName}/${uniqueFilename}`;
  }

  async delete(fileUrlOrPath) {
    if (!fileUrlOrPath) return;

    let key = fileUrlOrPath;
    if (this.publicUrl && fileUrlOrPath.startsWith(this.publicUrl)) {
      key = fileUrlOrPath.replace(this.publicUrl, '').replace(/^\//, '');
    } else {
      const parts = fileUrlOrPath.split('/');
      key = parts[parts.length - 1];
    }

    try {
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });
      await this.s3Client.send(command);
    } catch (err) {
      console.error('Erro ao deletar arquivo do R2:', err);
      try {
        const fs = await import('fs');
        const logMsg = `[${new Date().toISOString()}] Erro ao deletar "${key}": ${err.message}\n${err.stack}\n\n`;
        fs.appendFileSync('r2-errors.log', logMsg);
      } catch (logErr) {
        console.error('Falha ao escrever no log de erros do R2:', logErr);
      }
      throw err;
    }
  }
}
