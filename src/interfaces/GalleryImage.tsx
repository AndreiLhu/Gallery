import { IImage } from './Image';

interface IImageDetails {
  name?: string;
  location?: string;
  description?: string;
}
export interface IGalleryImage extends IImage {
  imageDetails?: IImageDetails;
}
