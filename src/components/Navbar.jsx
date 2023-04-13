import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='main'>
      <div className='navbar'>
        <div>logo</div>
        <div className='nav'>
          <nav>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Projects</a>
              </li>
              <li>
                <a href='/'>Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <button type='button' onClick={toggleMenu}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Projects</Link>
            </li>
            <li>
              <Link to='/'>Blog</Link>
            </li>
            <li>
              <Link to='/'>Skills</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
