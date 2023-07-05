import React from 'react';
import { ISlideContent } from '../interfaces/GalleryImage';

interface ISlideProps {
  slideContent: ISlideContent;
  isDialogOpen: boolean;
}

const Slide: React.FC<ISlideProps> = (props) => {
  const { slideContent, isDialogOpen } = props;

  return (
    <>
      <dialog open={isDialogOpen}>
        <h2>{slideContent.imageDetails?.name}</h2>
        <p>{slideContent.imageDetails?.description}</p>
        <h4>{slideContent.imageDetails?.location}</h4>
      </dialog>
    </>
  );
};

export default Slide;
