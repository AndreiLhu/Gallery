import React from 'react';
// import { IImage } from '../interfaces/Image';
import images from '../data/items.json';

// interface IGalleryProps {
//   images: IImage[];
// }

const Gallery: React.FC = () => {
  //   const { images } = props;

  return (
    <div>
      {images.map((image, index) => {
        console.log(image.imgUrl);
        return <img src={image.imgUrl} key={index} />;
      })}
    </div>
  );
};
export default Gallery;
