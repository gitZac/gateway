import type { Schema, Struct } from '@strapi/strapi';

export interface AtomicCta extends Struct.ComponentSchema {
  collectionName: 'components_atomic_ctas';
  info: {
    displayName: 'cta';
    icon: 'cursor';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaRoles: Schema.Attribute.Component<'atomic.text-item', true>;
    ctaText: Schema.Attribute.String;
  };
}

export interface AtomicIconLink extends Struct.ComponentSchema {
  collectionName: 'components_atomic_icon_links';
  info: {
    displayName: 'iconLink';
    icon: 'alien';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface AtomicLink extends Struct.ComponentSchema {
  collectionName: 'components_atomic_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    nestedLink: Schema.Attribute.Component<'atomic.nested-link', true>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AtomicNestedLink extends Struct.ComponentSchema {
  collectionName: 'components_atomic_nested_links';
  info: {
    displayName: 'nestedLink';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AtomicSimpleList extends Struct.ComponentSchema {
  collectionName: 'components_atomic_simple_lists';
  info: {
    displayName: 'simpleList';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface AtomicTextItem extends Struct.ComponentSchema {
  collectionName: 'components_atomic_text_items';
  info: {
    displayName: 'textItem';
    icon: 'bulletList';
  };
  attributes: {
    item: Schema.Attribute.String;
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

export interface GlobalSimpleFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_simple_footers';
  info: {
    displayName: 'SimpleFooter';
    icon: 'apps';
  };
  attributes: {};
}

export interface GlobalSimpleHero extends Struct.ComponentSchema {
  collectionName: 'components_global_simple_heroes';
  info: {
    displayName: 'SimpleHero';
    icon: 'alien';
  };
  attributes: {
    copy: Schema.Attribute.String;
    heroCta: Schema.Attribute.Component<'atomic.cta', true>;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isTwoCol: Schema.Attribute.Boolean;
    mainTitle: Schema.Attribute.String;
  };
}

export interface GlobalSimpleNav extends Struct.ComponentSchema {
  collectionName: 'components_global_simple_navs';
  info: {
    displayName: 'SimpleNav';
    icon: 'apps';
  };
  attributes: {};
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
      'atomic.icon-link': AtomicIconLink;
      'atomic.link': AtomicLink;
      'atomic.nested-link': AtomicNestedLink;
      'atomic.simple-list': AtomicSimpleList;
      'atomic.text-item': AtomicTextItem;
      'global.event-card-list': GlobalEventCardList;
      'global.magazine-hero': GlobalMagazineHero;
      'global.simple-footer': GlobalSimpleFooter;
      'global.simple-hero': GlobalSimpleHero;
      'global.simple-nav': GlobalSimpleNav;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
