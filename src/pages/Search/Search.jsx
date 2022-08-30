import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import'./searchStyle.css';

export function Search() {

  const [carList, setCarList] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value } = event.target;
    const filteredList = carList.filter((eachCar) => eachCar.brand.includes(value) || eachCar.model.includes(value))
    setCarList(filteredList);
  }

  useEffect(() => {
    carList
  }, []);

  const handleGetAll = async () => {
    const carListFromDataBase = await api({
      method: 'get',
      url: '/carsales'
    });
    setCarList(carListFromDataBase.data);
  }

  const handleEdit = async (e) => {
    const { id } = e.target;
    console.log(id)
    if (confirm('Are you sure you want to edit of this car from the database?')) {
      navigate('/register', { state: { id: id }})
    }
  }

  const handleDelete = async (e) => {
    const { id } = e.target;
    if (confirm('Are you sure you want to delete this information from the database?')) {
      await api({
        method: "delete",
        url: `/carsales/${id}`,
      })
      const excludedCarList = carList.filter((eachCar) => eachCar._id !== id);
      setCarList(excludedCarList);
    }
  }

  return (
    <div>
      <Header />
      <div className='form__group background-search'>
        <div>
          <input 
              type="text" 
              className="form__input" 
              id="name" 
              placeholder="Car Model or Brand" 
              required=""
              onChange={(e) => handleChange(e)}
            />
        </div>
        <div className='btn-div'>
          <button
          className='btn-search'
            onClick={() => handleGetAll()}
          >
            Return All List
          </button>
        </div>
        <table className='container-search-form' >
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
                key={eachCar._id}
              >
                <td>{eachCar.brand}</td>
                <td>{eachCar.model}</td>
                <td>{eachCar.fabrication_year}</td>
                <td>{eachCar.color}</td>
                <td>{eachCar.price}</td>
                <td
                  id={eachCar._id}
                  onClick={(e) => handleEdit(e)}
                >Edit</td>
                <td
                  id={eachCar._id}
                  onClick={(e) => handleDelete(e)}
                >Delete</td>
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
