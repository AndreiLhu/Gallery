import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/items';

const Gallery: React.FC = () => {
  return (
    <>
      <div className="mainGalleryDiv">
        {images.map((image, index) => {
          return (
            <div className="column" key={index}>
              <Link to={`${image.id}`}>
                <img src={image.imgUrl} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Gallery;
