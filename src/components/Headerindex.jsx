import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../Reset.css';
import './HomePage.css';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


function Headerindex({ setChoosenOne ,choosenOne}) {
    const navigate = useNavigate();

    const orderPage = () => {
        setChoosenOne({
            isim: "",
            boyut: "",
            hamur: "Normal",
            pizzaName: "Position Absolute Acı Pizza",
            pizzaPrice: "60",
            malzemeler: [],
            notext: "",
          });
        navigate("/order");
    };

    return (
        <header className='homePageHeader'>
            <div className='home'>
                <img className='logo' src='/homepage/logo.svg' alt='Logo' />
                <p className='text'>KOD ACIKTIRIR PİZZA, DOYURUR</p>
                <Button
                    className='aciktimButton'
                    onClick={() => orderPage()}
                >
                    ACIKTIM
                </Button>
            </div>
        </header>
    );
}

export default Headerindex;