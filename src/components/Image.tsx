import React from 'react';

import { Link } from 'react-router-dom';
import { IImage } from '../interfaces/Image';

interface IImageProps {
  image: IImage;
}

const Image: React.FC<IImageProps> = (props) => {
  const { image } = props;

  return (
    <div className="column" key={image.id}>
      <Link to={`${image.id}`}>
        <div className="mainContainerGalleryImage">
          <img src={image.imgUrl} />
          <div className="textGalleryImage">
            <h2 className="nameGalleryImage">{image.name}</h2>

            <p className="locationGalleryImage"> {image.location}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Image;
