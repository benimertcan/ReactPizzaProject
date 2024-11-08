import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../Reset.css';
import './HomePage.css';
import {  NavLink } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Pizzas({ pizza, setChoosenOne,choosenOne }) {
  const navigate = useNavigate();

  const orderPage = (name, price) => {
    setChoosenOne({
      isim: "",
      boyut: "",
      hamur: "Normal",
      pizzaName: name,
      pizzaPrice: price,
      malzemeler: [],
      notext: "",
    });
    navigate("/order");
  };

  return (
    <>
      <NavLink onClick={() => orderPage(pizza.pizzaName, pizza.pizzaPrice)} className='pizza'>
        <div>
          <img src={pizza.path} className='center' alt={pizza.pizzaName} />
          <div>
            <h2 className='flexStart'>{pizza.pizzaName}</h2>
            <div className='displayRow productData'>
              <div className='displayRow center'>
                <p className='pt'>4.9</p>
                <p>(200)</p>
              </div>
              <h2 className='center'>{pizza.pizzaPrice}₺</h2>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default Pizzas;
