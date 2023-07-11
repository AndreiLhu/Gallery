import React from 'react';
import { useParams } from 'react-router-dom';
import { IImage, images } from '../data/items';

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
      <div>
        <h2>ImageDetails - {image.id} </h2>
        <img src={image.imgUrl} style={{ maxWidth: '500px' }} />
        <p>{image.description}</p>
        <h4>{image.location}</h4>
      </div>
    </React.Fragment>
  );
};

export default ImageDetails;
