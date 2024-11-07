import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../Reset.css';
import './HomePage.css'
import { Button } from 'reactstrap';
function Headerindex() {
    return (
        <header className='homePageHeader'>

            <div className='home'>
                <img className='logo' src='/homepage/logo.svg' alt='Logo' />
                <p className='text'>KOD ACIKTIRIR PİZZA, DOYURUR</p>
                <Button
                    className='aciktimButton'

                >
                    ACIKTIM
                </Button>
            </div>
        </header>
    );
}

export default Headerindex;