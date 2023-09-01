import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { images } from '../data/items';
import { IImage } from '../interfaces/Image';

const Slide: React.FC = () => {
  const { id } = useParams();
  const [image, setImage] = React.useState<IImage>();
  const [currentlySelectedId, setCurrentlySelectedId] = React.useState<number>(
    parseInt(id as string)
  );

  const isReady = () => {
    return images.length > 0;
  };

  let nextSlide = null;
  let previousSlide = null;
  const targetObj = currentlySelectedId;

  if (isReady()) {
    nextSlide = targetObj >= 10 ? 1 : targetObj + 1;
    previousSlide = targetObj > 1 ? targetObj - 1 : null;
  }

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
  const handleForwardClick = React.useCallback(() => {
    setCurrentlySelectedId(currentlySelectedId + 1);
    const matchingImage = images.find(
      (image) => image.id === currentlySelectedId
    );
    setImage(matchingImage);
  }, [currentlySelectedId]);

  if (image == null) {
    return null;
  }

  console.log(currentlySelectedId);

  return !isReady() ? (
    <div>Loading</div>
  ) : (
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
      <div className="slideControls">
        <Link onClick={handleBackClick} to={`/${previousSlide}`}>
          <span className="slideButton">Go Back</span>
        </Link>
        <Link to={`/${nextSlide}`} onClick={handleForwardClick}>
          <span className="slideButton">Go forward</span>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Slide;
