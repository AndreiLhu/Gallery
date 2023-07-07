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

  console.log(currentlySelectedImage);
  const { slideContent } = props;
  return (
    <div>
      <img
        src={slideContent.imgUrl}
        style={{ width: '200px' }}
        onClick={() => handleImageClick(slideContent)}
      />
      <h2>{slideContent.imageDetails?.name}</h2>
      <p>{slideContent.imageDetails?.description}</p>
      <h4>{slideContent.imageDetails?.location}</h4>
    </div>
  );
};

export default Card;
