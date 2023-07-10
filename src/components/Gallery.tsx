import React from 'react';
import Slide from './Slide';
import { ISlideContent } from '../interfaces/GalleryImage';
import { images } from '../data/items';

const Gallery: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [currentlySelectedImage, setCurrentlySelectedImage] =
    React.useState<ISlideContent>();

  const handleImageClick = React.useCallback(
    (selectedImage: ISlideContent) => {
      const currectlySelectedImage = images.filter(
        (image) => image.id === selectedImage.id
      );
      setCurrentlySelectedImage(currectlySelectedImage[0]);
      setIsDialogOpen(!isDialogOpen);
    },
    [isDialogOpen]
  );

  console.log('isDialogOpen', isDialogOpen);

  console.log('currentlySelectedImage', currentlySelectedImage);
  return (
    <div>
      {images.map((image, index) => {
        return (
          <img
            src={image.imgUrl}
            key={index}
            style={{ width: '200px' }}
            onClick={() => handleImageClick(image)}
          />
        );
      })}
      {isDialogOpen && (
        <Slide
          slideContent={currentlySelectedImage as ISlideContent}
          isDialogOpen={isDialogOpen}
        />
      )}
    </div>
  );
};
export default Gallery;
