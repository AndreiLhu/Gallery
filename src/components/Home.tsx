import React from 'react';
import PageHeader from './PageHeader';
import { Route, Routes } from 'react-router';
import Gallery from './Gallery';
import Slide from './Slide';

export default function Home() {
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
