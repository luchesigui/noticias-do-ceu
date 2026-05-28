import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { StorageProvider } from './storage-provider.js';

/**
 * Local Disk Storage Provider (SOLID - Single Responsibility Principle)
 */
export class LocalStorageProvider extends StorageProvider {
  async upload(file) {
    if (!file || file.size === 0) {
      throw new Error('Nenhum arquivo enviado ou arquivo está vazio.');
    }

    const fileExt = path.extname(file.name) || '.jpg';
    const uniqueFilename = `${crypto.randomUUID()}${fileExt}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
    // Ensure upload directory exists
    await fs.mkdir(uploadDir, { recursive: true });
    
    const filePath = path.join(uploadDir, uniqueFilename);
    await fs.writeFile(filePath, buffer);
    
    // Return relative URL for development local server
    return `/uploads/${uniqueFilename}`;
  }

  async delete(fileUrlOrPath) {
    if (!fileUrlOrPath || !fileUrlOrPath.startsWith('/uploads/')) return;

    const filename = fileUrlOrPath.replace('/uploads/', '');
    const filePath = path.join(process.cwd(), 'public', 'uploads', filename);
    
    try {
      await fs.unlink(filePath);
    } catch (err) {
      // Ignore if file doesn't exist
      if (err.code !== 'ENOENT') {
        console.error('Erro ao deletar arquivo local:', err);
      }
    }
  }
}
