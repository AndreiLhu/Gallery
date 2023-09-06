import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const PageHeader: React.FC = () => {
  return (
    <>
      <Link to="/" className="mainTitleLink">
        {/* <h1 className="mainTitle">galleria.</h1> */}
        <img className="mainLogo" src={logo} alt="logo" />
      </Link>
      <div className="headerBorder"></div>
    </>
  );
};

export default PageHeader;
