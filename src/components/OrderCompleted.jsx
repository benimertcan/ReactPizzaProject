import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../Reset.css';
import './HomePage.css';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function OrderCompleted({ pizzaData }) {
    const navigate = useNavigate();

    const homePage = () => {
        navigate("/");
    };
    return (
        <>
            <div className='center displayCol orderCompletedSection'>
                <img className='logo' src='/homepage/logo.svg' alt='Logo' />
                <div className=' displayCol'>
                    <p className=' fontSatisfy center colorYellow'>lezzetin yolda</p>
                    <h1 className=' pageh1 center'>SİPARİŞ ALINDI</h1>
                    <div className='ordercompdiv'></div>
                    <h3>{pizzaData.pizzaName}</h3>
                    <div className='flexStart ordercompIn'>
                        <p>Boyut: {pizzaData.boyut}</p>
                        <p>Hamur: {pizzaData.hamur}</p>
                        <p>Ek Malzemeler: {
                            pizzaData.malzemeler.map((malzeme, index) => (
                                <span key={index}>{malzeme}{index < pizzaData.malzemeler.length - 1 ? ', ' : ''}</span>
                            ))
                        }</p>
                    </div>
                    <div className='borderB'>
                        <h2 className='flexStart'>Sipariş Toplamı</h2>
                        <div className='displayCol centerAll'>
                            <div className='spaceBetween '>
                                <p>Seçimler</p>
                                <p>{pizzaData.materialsP }₺</p>
                            </div>
                            <div className='spaceBetween '>
                                <p>Toplam</p>
                                <p>{ pizzaData.totalP}₺</p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
            <Footer />
        </>
    );
}

export default OrderCompleted;