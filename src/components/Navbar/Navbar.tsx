import React from 'react';
import './Navbar.scss';
import Input from '@material-ui/core/Input';

const Navbar = () => {
  return (
    <nav className='nav' aria-label='nav'>
      <div className='nav-logo'>
        <img src='favicon.png' alt='Logo' height='48px' width='48px' />
        <h1>Weather</h1>
      </div>
      <div className='nav-search'>
        <Input
          placeholder='Search...'
          inputProps={{ 'aria-label': 'search' }}
          type='text'
        />
      </div>
    </nav>
  );
};

export default Navbar;
