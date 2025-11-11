export default ({ env }) => ({
  'sortable-entries': {
    enabled: true,
    config: {
      displayField: 'nome'
    }
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('Matta'),
        api_key: env('279785463378244'),
        api_secret: env('mDWwqUzcZ3EuVZPJQtfitzjMhSY'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});