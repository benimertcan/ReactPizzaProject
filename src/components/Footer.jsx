import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../Reset.css';
import './HomePage.css';


function Footer() {

    return (
        <>
            <footer >
                <div className='footerSection spaceBetween'>
                    <div className='contact '>
                        <img src='public/products/footer/logo-footer.svg' />
                        <a href="#" className='flexWrap'>
                            <img src='public/products/footer/icons/icon-1.png' />
                            341 Londonderry Road, İstanbul Türkiye
                        </a>
                        <a href="mailto:aciktim@teknolojikyemekler.com" className='flexWrap'>
                            <img src='public/products/footer/icons/icon-2.png' />
                            aciktim@teknolojikyemekler.com
                        </a>
                        <a href="tel:+902161234567" className='flexWrap'>
                            <img src='public/products/footer/icons/icon-3.png' />
                            +90 216 123 45 67
                        </a>
                    </div>
                    <div className='displayCol flexStart contact'>
                        <h2>Hot Menu</h2>
                        <a href="#" >
                            Terminal Pizza
                        </a>
                        <a href="#" >
                            5 Kişilik Hackathlon Pizza
                        </a>
                        <a href="#" >
                            useEffect Tavuklu Pizza
                        </a>
                        <a href="#" >
                            Beyaz Console Frosty
                        </a>
                        <a href="#" >
                            Testler Geçti Mutlu Burger
                        </a>
                        <a href="#" >
                            Position Absolute Acı Burger
                        </a>
                    </div>
                    <div className='flexStart contact flexWrap '>
                        <h2>Instagram</h2>
                        <div className='displayRow photos flexWrap'>
                            <img src='public/products/footer/insta/li-0.png' />
                            <img src='public/products/footer/insta/li-1.png' />
                            <img src='public/products/footer/insta/li-2.png' />
                        </div>
                        <div className='displayRow photos flexWrap'>
                            <img src='public/products/footer/insta/li-3.png' />
                            <img src='public/products/footer/insta/li-4.png' />
                            <img src='public/products/footer/insta/li-5.png' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
