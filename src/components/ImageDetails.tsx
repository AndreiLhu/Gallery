import React from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../data/items';
import { IImage } from '../interfaces/Image';

const ImageDetails: React.FC = () => {
  const [image, setImage] = React.useState<IImage>();
  const { id } = useParams();

  React.useEffect(() => {
    const matchingImage = images.find((image) => image.id === id);
    setImage(matchingImage);
  }, [id]);

  if (image == null) {
    return null;
  }
  return (
    <React.Fragment>
      <span className="spanCard"></span>
      <div className="mainCardDiv">
        <img src={image.imgUrl} className="cardImage" />
        <h4 className="locationCard">{image.location}</h4>
        <p className="cardDescription">{image.description}</p>
      </div>
    </React.Fragment>
  );
};

export default ImageDetails;
