import React from 'react';
import { ISlideContent } from '../interfaces/GalleryImage';
import { images } from '../data/items';

interface ISlideProps {
  slideContent: ISlideContent;
}

const Card: React.FC<ISlideProps> = (props) => {
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

  const { slideContent } = props;
  return (
    <div className="mainDivCard">
      <div className="image-title-card">
        <img
          className="imageCard"
          src={slideContent.imgUrl}
          onClick={() => handleImageClick(slideContent)}
        />
        <h2 className="nameCard">{slideContent.imageDetails?.name}</h2>
      </div>
      <p className="descriptionCard">
        {slideContent.imageDetails?.description}
      </p>
      <h4 className="locationCard">{slideContent.imageDetails?.location}</h4>
    </div>
  );
};

export default Card;
