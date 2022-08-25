import React from 'react'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import api from '../../utils/api';
import'./searchStyle.css';

export function Search() {

  const [carList, setCarList] = useState([]);

  const handleChange = async (e) => {
    await api.get('/salescar')
      .then((response) => {
        setCarList(response);
      })
  }

  return (
    <div>
      <Header />
      <div class='form__group background'>
        <input 
          type="text" 
          class="form__input" 
          id="name" 
          placeholder="Car Model or Brand" 
          required=""
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        {carList.map((eachObject) => {
          eachObject.find((value) => Object.values(value))
          
        })}
      </div>
      <Footer />
    </div>
  )
}
