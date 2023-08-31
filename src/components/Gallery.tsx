import React from 'react';

import { images } from '../data/items';
import Image from './Image';

const Gallery: React.FC = () => {
  return (
    <>
      <div className="mainGalleryDiv">
        {images.map((i) => {
          return <Image image={i} />;
        })}
      </div>
    </>
  );
};
export default Gallery;
