import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
// import api from '../../utils/api'
import'./homeStyle.css';

export function Home() {
  const navigate = useNavigate();
  
  const handleClickRegister = () => {
    navigate('/register');
  };

  const handleClickSearch = () => {
    navigate('/search');
  }

  return (
    <div>
      <Header />
      <div class='container-home background-home'>
        <button 
          class='btn1'
          type='button'
          onClick={handleClickSearch}
        >
          Search
        </button>
        <button 
          class='btn2'
          type='button'
          onClick={handleClickRegister}
        >
          Register new car
        </button>
      </div>
      <Footer />
    </div>
  )
}
