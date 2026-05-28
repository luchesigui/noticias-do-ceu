import { StorageProvider } from './storage/storage-provider.js';
import { LocalStorageProvider } from './storage/local-storage-provider.js';
import { R2StorageProvider } from './storage/r2-storage-provider.js';

// Helper to check if R2 config exists in the environment
const hasR2Config = () => {
  const r2AccessKeyId = (typeof process !== 'undefined' ? process.env.R2_ACCESS_KEY_ID : null) || import.meta.env.R2_ACCESS_KEY_ID;
  const r2SecretAccessKey = (typeof process !== 'undefined' ? process.env.R2_SECRET_ACCESS_KEY : null) || import.meta.env.R2_SECRET_ACCESS_KEY;
  const r2BucketName = (typeof process !== 'undefined' ? process.env.R2_BUCKET_NAME : null) || import.meta.env.R2_BUCKET_NAME;
  const r2Endpoint = (typeof process !== 'undefined' ? process.env.R2_ENDPOINT : null) || import.meta.env.R2_ENDPOINT;
  return !!(r2AccessKeyId && r2SecretAccessKey && r2BucketName && r2Endpoint);
};

// Instantiate the default provider dynamically
let defaultProvider;
if (hasR2Config()) {
  try {
    defaultProvider = new R2StorageProvider();
  } catch (e) {
    console.warn('Falha ao inicializar o R2StorageProvider, usando o LocalStorageProvider como fallback:', e.message);
    defaultProvider = new LocalStorageProvider();
  }
} else {
  defaultProvider = new LocalStorageProvider();
}

// Re-export provider classes for dependency injection/custom setProvider calls
export { StorageProvider } from './storage/storage-provider.js';
export { LocalStorageProvider } from './storage/local-storage-provider.js';
export { R2StorageProvider } from './storage/r2-storage-provider.js';

/**
 * Storage Service Context Class (SOLID - Open-Closed Principle & Dependency Inversion Principle)
 * Handles file operations by delegating them to the selected StorageProvider instance.
 */
export class StorageService {
  static provider = defaultProvider;

  /**
   * Sets the active storage provider dynamically (Dependency Injection)
   * @param {StorageProvider} provider 
   */
  static setProvider(provider) {
    if (!(provider instanceof StorageProvider)) {
      throw new Error('O provider fornecido deve estender a classe abstrata StorageProvider.');
    }
    StorageService.provider = provider;
  }

  /**
   * Uploads a file using the active provider
   */
  static async uploadFile(file) {
    return StorageService.provider.upload(file);
  }

  /**
   * Deletes a file using the active provider
   */
  static async deleteFile(fileUrlOrPath) {
    return StorageService.provider.delete(fileUrlOrPath);
  }
}
