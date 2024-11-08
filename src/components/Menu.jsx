import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../Reset.css';
import './HomePage.css'

function Menu() {
    const icons = [
        { url: "public/products/icons/1.svg", name: "YENİ! Kore" },
        { url: "public/products/icons/2.svg", name: "Pizza" },
        { url: "public/products/icons/3.svg", name: "Burger" },
        { url: "public/products/icons/4.svg", name: "Kızartlar" },
        { url: "public/products/icons/5.svg", name: "Fast Food" },
        { url: "public/products/icons/6.svg", name: "Gazlı İçecek" },
    ];
    return (
        <>
            <div className='center'>
                <div className='menuDiv'>
                    {
                        icons.map((icon) => {
                            return <div className='menuButton' key={icon.url}><img src={icon.url} />{icon.name}</div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Menu;