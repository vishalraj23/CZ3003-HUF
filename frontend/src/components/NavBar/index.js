import * as React from 'react';

import './index.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <Link className='nav-link' to='/'>
        <h2>Home</h2>
      </Link>
      <Link className='nav-link' to='/dashboard'>
        <h2>Dashboard</h2>
      </Link>
      <Link className='nav-link' to='/settings'>
        <h2>Settings</h2>
      </Link>
    </div>
  );
};

export { NavBar };
