import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { images } from '../data/items';
import { IImage } from '../interfaces/Image';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';

const Slide: React.FC = () => {
  const { id } = useParams();
  const [isForwardButtonDisabled, setIsForwardButtonDisabled] =
    React.useState<boolean>(false);
  const [isBackButtonDisabled, setIsBackButtonDisabled] =
    React.useState<boolean>(false);
  const [progressBarWidth, setProgressBarWidth] = React.useState<string>('30%');
  const [image, setImage] = React.useState<IImage>();
  const [currentlySelectedId, setCurrentlySelectedId] = React.useState<number>(
    parseInt(id as string)
  );

  const getProgressBar = React.useCallback(
    (currentlySelectedId: number): string => {
      return `${currentlySelectedId}0%`;
    },
    []
  );

  React.useEffect(() => {
    const progressValue = getProgressBar(currentlySelectedId);
    setProgressBarWidth(progressValue);
  }, [currentlySelectedId, getProgressBar]);

  const isReady: boolean = images.length > 0;

  let nextSlide = null;
  let previousSlide = null;
  const targetObj = currentlySelectedId;

  if (isReady) {
    nextSlide = targetObj >= 10 ? 1 : targetObj + 1;
    previousSlide = targetObj > 1 ? targetObj - 1 : null;
  }

  console.log(getProgressBar);

  React.useEffect(() => {
    const matchingImage = images.find(
      (image) => image.id === parseInt(id as string)
    );
    setImage(matchingImage);
  }, [id]);

  const handleBackClick = React.useCallback(() => {
    const updatedSelectedId = currentlySelectedId - 1;
    setCurrentlySelectedId(updatedSelectedId);
    const matchingImage = images.find(
      (image) => image.id === currentlySelectedId
    );
    if (updatedSelectedId === 1) {
      setIsBackButtonDisabled(true);
    } else {
      setIsBackButtonDisabled(false);
      if (isForwardButtonDisabled) {
        setIsForwardButtonDisabled(false);
      }
    }
    setImage(matchingImage);
  }, [currentlySelectedId, isForwardButtonDisabled]);

  const handleForwardClick = React.useCallback(() => {
    const updatedSelectedId = currentlySelectedId + 1;
    setCurrentlySelectedId(updatedSelectedId);
    const matchingImage = images.find(
      (image) => image.id === currentlySelectedId
    );
    console.log('interior', currentlySelectedId);

    setImage(matchingImage);

    if (updatedSelectedId === 10) {
      setIsForwardButtonDisabled(true);
    } else {
      setIsForwardButtonDisabled(false);
      if (isBackButtonDisabled) {
        setIsBackButtonDisabled(false);
      }
    }
  }, [currentlySelectedId, isBackButtonDisabled]);

  if (image == null) {
    return null;
  }

  console.log(currentlySelectedId);
  console.log(progressBarWidth);

  return !isReady ? (
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
      <div
        className="progressBar"
        style={{
          borderBottom: '2px solid rgb(195, 195, 195)',
          width: progressBarWidth,
        }}
      ></div>
      <div className="slideControls">
        <Link onClick={handleBackClick} to={`/${previousSlide}`}>
          <button disabled={isBackButtonDisabled} className="footerButton">
            <AiFillStepBackward className="backwardIcon" />
          </button>
        </Link>
        <Link to={`/${nextSlide}`} onClick={handleForwardClick}>
          <button disabled={isForwardButtonDisabled} className="footerButton">
            <AiFillStepForward className="forwardIcon" />
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Slide;
