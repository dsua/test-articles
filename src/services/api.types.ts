export type ApiBundle = {
  title: string;
  description: string;
  image: ApiBundleImage;
  label: string;
  bundelItems: ApiBundleItem[];
}

export type ApiBundleItem = {
  id: number;
  aangemaaktDatum: ApiDate;
  titel: string;
  urlAlias: string;
  afbeelding: ApiBundleItemImage;
  lead: string;
}

export type ApiBundleItemImage = {
  crops: ApiImageCrop[];
}

export type ApiDate = {
  formatted: string;
}
export type ApiBundleImage = {
  imageUrl: string;
  crops: ApiImageCrop[];
}

export type ApiImageCrop = {
  type: ApiCropType;
  path: string;
}

export enum ApiCropType {
  LandscapeWide = 'liggend_breed',
  SquareSmall = 'square_small',
}
