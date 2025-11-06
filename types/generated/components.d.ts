import type { Schema, Struct } from '@strapi/strapi';

export interface ExhibitionsExhibitions extends Struct.ComponentSchema {
  collectionName: 'components_exhibitions_exhibitions';
  info: {
    displayName: 'Exhibitions';
  };
  attributes: {
    data: Schema.Attribute.String;
    link: Schema.Attribute.Text;
    luogo: Schema.Attribute.Text;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    nome: Schema.Attribute.Text;
    ora: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'exhibitions.exhibitions': ExhibitionsExhibitions;
    }
  }
}
