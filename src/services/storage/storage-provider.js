/**
 * Abstract Base Class for Storage Providers (SOLID - Dependency Inversion Principle)
 */
export class StorageProvider {
  /**
   * Uploads a file to the storage provider
   * @param {File} file - Web File API object
   * @returns {Promise<string>} The public URL or path of the uploaded file
   */
  async upload(file) {
    throw new Error('Method "upload(file)" must be implemented.');
  }

  /**
   * Deletes a file from the storage provider
   * @param {string} fileUrlOrPath - The full URL or relative path of the file
   * @returns {Promise<void>}
   */
  async delete(fileUrlOrPath) {
    throw new Error('Method "delete(fileUrlOrPath)" must be implemented.');
  }
}
