import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader: React.FC = () => {
  return (
    <Link to="/" className="mainTitle">
      {' '}
      <h1>.galleria</h1>
    </Link>
  );
};

export default PageHeader;
