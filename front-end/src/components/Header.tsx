import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <img src={logo} className="app-logo" alt="logo" />
      <div className="text-center mb-30">
        <Link to="/dashboard" className="link bold">Dashboard</Link>
				<span> | </span>
        <Link to="/adding" className="link bold">Add Video</Link>
      </div>
    </div>
  );
};

export default Header;
