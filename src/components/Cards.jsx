import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../Reset.css'; 
import './HomePage.css'
import { Button } from 'reactstrap';

function BigCard() {
    return (
        <>
        <div className='center displayCol'>
            <div className='bigCard spaceBetween displayFlexCol flexStart'>
              <h1>Özel Lezzetus</h1>
              <p>Position:Absolute Acı Burger</p>
              <Button className='pizzaOrderButton'>Sipariş Ver</Button>
            </div>
            <div className='center flexStart'> 
            <div className='lowCard  spaceBetween displayFlexCol flexStart'>
              <h1>Hackhatlon Burger Menu</h1>
              <Button className='pizzaOrderButton'>Sipariş Ver</Button>
            </div>
            <div className='lowCard lowCard2 spaceBetween displayFlexCol flexStart'>
              <h1><span>Çoooook</span> <span className='darkg'>hızlı npm gibi kurye</span></h1>
              <Button className='pizzaOrderButton'>Sipariş Ver</Button>
            </div>
            </div>
        </div>
        </>
    );
}

export default BigCard;