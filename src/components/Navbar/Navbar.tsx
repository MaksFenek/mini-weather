import React from 'react';
import './Navbar.scss';
import Input from '@material-ui/core/Input';

interface INavbar {
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  searchRef: any;
}

const Navbar: React.FC<INavbar> = ({ onKeyPress, searchRef }) => {
  return (
    <nav className='nav' aria-label='nav'>
      <div className='nav-logo'>
        <img src='favicon.png' alt='Logo' height='48px' width='48px' />
        <h1>Weather</h1>
      </div>
      <div className='nav-search'>
        <Input
          inputRef={searchRef}
          onKeyPress={onKeyPress}
          style={{ width: 'auto' }}
          placeholder='Search...'
          aria-label='search'
          inputProps={{ id: 'autocomplete' }}
          type='text'
        />
      </div>
    </nav>
  );
};

export default Navbar;
