import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/items';
import Slide from './Slide';

const Gallery: React.FC = () => {
  return (
    <>
      <div className="mainGalleryDiv">
        {images.map((i) => {
          return <Slide image={i} />;
        })}
      </div>
    </>
  );
};
export default Gallery;
