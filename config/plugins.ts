export default ({ env }) => ({
  'sortable-entries': {
    enabled: true,
    config: {
      displayField: 'nome'
    }
  },
  'strapi-cloud': {
    enabled: false,
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          folder: 'strapi',
          resource_type: 'auto', // ✅ Rileva automaticamente: immagini, PDF, video, audio, raw
          allowed_formats: [
            // Immagini
            'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico',
            // Documenti
            'pdf', 'txt', 'doc', 'docx',
            // Audio
            'm4a', 'mp3', 'wav', 'aac', 'ogg', 'flac',
            // Video
            'mp4', 'mov', 'avi', 'mkv', 'webm',
          ],
        },
        uploadStream: {
          folder: 'strapi',
          resource_type: 'auto',
          allowed_formats: [
            // Immagini
            'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico',
            // Documenti
            'pdf', 'txt', 'doc', 'docx',
            // Audio
            'm4a', 'mp3', 'wav', 'aac', 'ogg', 'flac',
            // Video
            'mp4', 'mov', 'avi', 'mkv', 'webm',
          ],
        },
        delete: {},
      },
    },
  },
});