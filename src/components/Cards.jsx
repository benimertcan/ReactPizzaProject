import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../Reset.css';
import './HomePage.css';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
function Card({ pizzaData }) {
  const navigate = useNavigate();

  const orderPage = () => {
    navigate("/order");
  }

  return (
    <>
      <div className='makeBej'>
        <div className='center displayCol  middleSection'>
          <div className='center cards spaceBetween '>
            <div className='bigCard spaceBetween flexStart'>
              <h1>Özel Lezzetus</h1>
              <p>Position: Absolute Acı Burger</p>
              <Button className='pizzaOrderButton' onClick={orderPage}>Sipariş Ver</Button>
            </div>
            <div className='center displayCol '>
              <div className='lowCard spaceBetween flexStart'>
                <h1>Hackhatlon Burger Menu</h1>
                <Button className='pizzaOrderButton' onClick={orderPage}>Sipariş Ver</Button>
              </div>
              <div className='lowCard lowCard2 spaceBetween flexStart'>
                <h1><span>Çoooook</span> <span className='darkg'>hızlı npm gibi kurye</span></h1>
                <Button className='pizzaOrderButton' onClick={orderPage}>Sipariş Ver</Button>
              </div>
            </div>
          </div>
          <div className=' displayCol'>
            <p className='colorRed fontSatisfy center'>en çok paketlenen menüler</p>
            <h1 className='darkg pageh1 center'>Acıktıran Kodlara Doyuran Lezzetler</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
