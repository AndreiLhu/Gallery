import React from 'react';
import Slide from './Slide';
import { ISlideContent } from '../interfaces/GalleryImage';
import { images } from '../data/items';
import { Link } from 'react-router-dom';

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

  return (
    <div className="mainDivGallery">
      {images.map((image, index) => {
        return (
          <Link to="/card" key={index}>
            <img
              className="cardPhoto"
              src={image.imgUrl}
              style={{ width: '250px' }}
              onClick={() => handleImageClick(image)}
            />
          </Link>
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
