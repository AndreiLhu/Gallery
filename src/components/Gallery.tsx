import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/items';

const Gallery: React.FC = () => {
  return (
    <div>
      {images.map((image, index) => {
        return (
          <Link to={`${image.id}`}>
            <img src={image.imgUrl} key={index} style={{ maxWidth: '200px' }} />
          </Link>
        );
      })}
    </div>
  );
};
export default Gallery;
