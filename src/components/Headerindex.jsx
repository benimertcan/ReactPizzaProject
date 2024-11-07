import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../Reset.css'; 
import './Headerindex.css'
import { Button } from 'bootstrap';
function Headerindex() {
    return (
        <header>
           
           <div className='home'>
           <img className='logo' src='/homepage/logo.svg' alt='Logo' />
            <p className='text'>KOD ACIKTIRIR PİZZA, DOYURUR</p>
            <a className='button'>ACIKTIM</a>
           </div>
        </header>
    );
}

export default Headerindex;