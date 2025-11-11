export default ({ env }) => ({
  'sortable-entries': {
    enabled: true,
    config: {
      displayField: 'nome'
    }
  },
  // Disabilita Strapi Cloud
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
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});