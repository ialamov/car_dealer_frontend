import React from 'react';
import './footerStyle.css';

export function Footer() {
  return (
    <div className='footer'>
      <ul className="wrapper">
        <li className='icon'>©Ialamov</li>
        <li className="icon github">
          <a href='https://github.com/ialamov'></ a>
          Github
        </li>
      </ul>
    </div>
  )
}
