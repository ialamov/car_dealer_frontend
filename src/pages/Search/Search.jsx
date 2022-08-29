import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import api from '../../utils/api';
import'./searchStyle.css';

export function Search() {

  const [carList, setCarList] = useState([]);

  const handleGetAll = async () => {
    const carListFromDataBase = await api({
      method: 'get',
      url: '/carsales'
    });
    console.log(carListFromDataBase.data)
    setCarList(carListFromDataBase.data);
  }

  return (
    <div>
      <Header />
      <div className='form__group background-search'>
      <input 
          type="text" 
          className="form__input" 
          id="name" 
          placeholder="Car Model or Brand" 
          required=""
          onChange={(e) => handleChange(e)}
        />
      <button
        class='btn-search'
        onClick={() => console.log('run')}
      >
        Search
      </button>
      <button
      class='btn-search'
        onClick={() => handleGetAll()}
      >
        Return All List
      </button>
      <table class='container-search-form' >
        <thead>
          <th>Brand</th>
          <th>Model</th>
          <th>Fabrication Year</th>
          <th>Color</th>
          <th>Price in USD</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {carList.map((eachCar) => {
            return (
            <tr 
            key={eachCar._id}>
              <td>{eachCar.brand}</td>
              <td>{eachCar.model}</td>
              <td>{eachCar.fabrication_year}</td>
              <td>{eachCar.color}</td>
              <td>{eachCar.price}</td>
              <span>Edit</span>
              <span>Delete</span>
            </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      <Footer />
    </div>
  )
}
