import React from 'react';
import { useParams } from 'react-router-dom';
import { images } from '../data/items';
import { IImage } from '../interfaces/Image';

const Slide: React.FC = () => {
  const { id } = useParams();
  const [image, setImage] = React.useState<IImage>();
  const [currentlySelectedId, setCurrentlySelectedId] = React.useState<number>(
    parseInt(id as string)
  );

  React.useEffect(() => {
    const matchingImage = images.find(
      (image) => image.id === parseInt(id as string)
    );
    setImage(matchingImage);
  }, [id]);

  const handleBackClick = React.useCallback(() => {
    setCurrentlySelectedId(currentlySelectedId - 1);
    const matchingImage = images.find(
      (image) => image.id === currentlySelectedId
    );
    setImage(matchingImage);
  }, [currentlySelectedId]);

  if (image == null) {
    return null;
  }

  console.log(currentlySelectedId);

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
            GO TO SOURCE
          </a>
        </div>
      </div>
      <div>
        <button onClick={handleBackClick}>Back</button>
        <button>Right</button>
      </div>
    </React.Fragment>
  );
};

export default Slide;
