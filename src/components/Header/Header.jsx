import React from 'react';
import Logo from '../../assets/white_logo.png';
import { useNavigate } from 'react-router-dom';
import './headerStyle.css';

export function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }
  
  return (
    <nav className='container'>
      <div className='header-wrapper'>
        <img 
          src={ Logo }
          className='logo icon'
          onClick={handleClick}
        />
      </div>
      <div>
        <li className='list'>
          <ul>Why us</ul>
          <ul>Contact</ul>
        </li>
      </div>
    </nav>
  )
}
