import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import Slide from './components/Slide';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <React.Fragment>
      <PageHeader />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/:id" element={<Slide />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
