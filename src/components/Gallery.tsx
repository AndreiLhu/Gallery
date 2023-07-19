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
                <div className="textGalleryImage">
                  <h2 className="nameGalleryImage">{image.name}</h2>
                  <p className="locationGalleryImage"> {image.location}</p>
                </div>
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
