import { IImage } from './Image';

interface IImageDetails {
  name?: string;
  location?: string;
  description?: string;
}
export interface ISlideContent extends IImage {
  imageDetails?: IImageDetails;
}
