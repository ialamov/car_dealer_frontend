import React from 'react';
import Logo from '../../assets/white_logo.png';
import { useNavigate } from 'react-router-dom';
import './headerStyle.css';

export function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  const handleClickRegister = () => {
    navigate('/register');
  };

  const handleClickSearch = () => {
    navigate('/search');
  }
  
  return (
    <nav className='container-header'>
      <div className='header-wrapper'>
        <img 
          src={ Logo }
          className='logo icon'
          onClick={handleClick}
        />
      </div>
      <div>
        <li className='list'>
          <ul
            onClick={handleClickSearch}
          >Search</ul>
          <ul
            onClick={handleClickRegister}
          >Register</ul>
        </li>
      </div>
    </nav>
  )
}
