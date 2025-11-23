export interface BaseImageType {
  caption: string;
  description?: string;
}

export interface SingleImageType extends BaseImageType {
  image: string;
}

export interface ImageGroupType extends BaseImageType {
  images: string[];
}
