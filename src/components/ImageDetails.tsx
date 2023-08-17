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
      <div className="mainCardDiv">
        <img src={image.imgUrl} className="cardImage" />
        <div className="titleContainer">
          <h2 className="nameCard">{image.name}</h2>
          <p className="locationCard">{image.location}</p>
        </div>

        <p className="numberBackground">{image.number}</p>
        <div className="sorurceDescriptionContainer">
          <p className="cardDescription">{image.description}</p>
          <a
            href="https://www.google.de/"
            className="sourceLink"
            target="blank"
          >
            go to source
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageDetails;
