import type { Schema, Struct } from '@strapi/strapi';

export interface AtomicCta extends Struct.ComponentSchema {
  collectionName: 'components_atomic_ctas';
  info: {
    displayName: 'cta';
    icon: 'cursor';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
  };
}

export interface GlobalEventCardList extends Struct.ComponentSchema {
  collectionName: 'components_global_event_card_lists';
  info: {
    displayName: 'EventCardList';
    icon: 'music';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface GlobalMagazineHero extends Struct.ComponentSchema {
  collectionName: 'components_global_magazine_heroes';
  info: {
    displayName: 'MagazineHero';
    icon: 'cast';
  };
  attributes: {
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cta: Schema.Attribute.Component<'atomic.cta', true>;
    subtitle: Schema.Attribute.String;
    superTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GlobalTestComponent extends Struct.ComponentSchema {
  collectionName: 'components_global_test_components';
  info: {
    displayName: 'testComponent';
    icon: 'briefcase';
  };
  attributes: {
    anotherCoolImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    coolImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atomic.cta': AtomicCta;
      'global.event-card-list': GlobalEventCardList;
      'global.magazine-hero': GlobalMagazineHero;
      'global.test-component': GlobalTestComponent;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
