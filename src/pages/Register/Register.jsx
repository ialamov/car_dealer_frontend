import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api'
import'./registerStyle.css';

export function Register() {
  const [listOfBrands, setListOfBrands] = useState([]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [fabricationYear, setFabricationYear] = useState(Number);
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(Number);
  const navigate = useNavigate();

  useEffect(() => {
    theCarList();
  }, []);

  const theCarList = async () => {
    const theList = await api.get('/carsales/brands');
    setListOfBrands(theList.data);
  }

  const handleChange = async (e) => {
    e.preventDefault();

        if (!brand) {
          alert(`All field must be completed. Verify the field "Brand"`);
          return;
        }

        if (!model) {
          alert(`All field must be completed. Verify the field "Car Model".`);
          return;
        }

        if (fabricationYear < 1900 || fabricationYear > 2023) {
          alert(`The year must be incorrect.`);
          return;
        }
        
        if (!color) {
          alert(`All field must be completed. Verify the field "Color".`);
          return;
        }
        
        if (!price) {
          alert(`All field must be completed. Verify the field "Price".`);
          return;
        }

      try{
        console.log(brand, model, fabricationYear, color, price)
        api({
          method: "post",
          url: '/carsales',
          data: {
            brand: brand,
            model: model,
            fabrication_year: fabricationYear,
            color: color,
            price: price
          }
        }),
        alert('Registered with succsess!');
      } catch (error) {
        alert('Houston we have a problem. We are working hard to solve it. Try again in an hour.')
      }
    }

  return (
    <div>
      <Header />
      <div className='background-register'>
        <form 
          className="container-registerForm"
          onSubmit={handleChange}
        >
          <div className='container-register-form'><h2>Register</h2></div>
          <div className='container-register-form'>
            <div className='container-brand'>
            <label className='label-brand'>Brand</label>
              <select 
                className='select'
                name='Brand'
                onChange={(e) => setBrand(e.target.value)}
              >
                <option>
                  Select Brand
                </option>
                {listOfBrands.map((eachBrand, index) => {
                  return (
                  <option 
                    key={index} 
                    value={eachBrand}>{eachBrand}
                  </option>)
                })};
              </select>
              <span className="focus"></span>
            </div>
            <label htmlFor='car-model'>
              Car Model
              <input 
                className='input'
                id='car-model'
                type='text'
                onChange={(e) => setModel(e.target.value)}
              />
            </label>
            <label className='label-year'>
              Fabrication Year
              <input 
                className='input' 
                id='Fabrication Year'
                type='number'
                min='1900'
                max='2023'
                onChange={(e) => setFabricationYear(e.target.value)}
              >
              </input>
            </label>
          </div>
          <div className='container-register-form'>
          <label htmlFor='color'>
            Color
            <input 
              className='input'
              id='color'
              type='text'
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <label htmlFor='price'>
            Price
            <input 
              className='input'
              id='price'
              type='text'
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          </div>
          <div className='container-register-form'>
            <button
              className='save'
              type='submit'
            >
              Save
          </button>
          <button
            className='save' 
            type="button"
            onClick={ () => navigate('/') }
          >
          Cancel
        </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
