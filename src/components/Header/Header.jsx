import React from 'react';
import Logo from '../../assets/white_logo.png';
import { useNavigate } from 'react-router-dom';
import './style.css';

export function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }
  
  return (
    <nav class='container'>
      <div>
        <img 
          src={ Logo }
          class='logo'
          onClick={handleClick}
        />
      </div>
      <div>
        <li class='list'>
          <ul>Why us</ul>
          <ul>Contact</ul>
        </li>
      </div>
    </nav>
  )
}
