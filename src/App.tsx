import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import ImageDetails from './components/ImageDetails';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/:id" element={<ImageDetails />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
