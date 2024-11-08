import Headerindex from './Headerindex'
import Menu from './Menu'
import Card from './Cards'
import { Outlet } from 'react-router-dom';
import Pizzas from './Pizzas';
import Footer from './Footer';
function Layout({ pizzaData, setChoosenOne,choosenOne }) {

    return (
        <>
            <Headerindex pizzaData={pizzaData} setChoosenOne={setChoosenOne} choosenOne={choosenOne} />
            <Menu />
            <Card />
            <Menu />
            <div className='center displayRow flexWrap makeBej'>
                {
                    pizzaData.map((pizza) => {
                        return <Pizzas key={pizza.pizzaName} setChoosenOne={setChoosenOne} pizza={pizza} choosenOne={choosenOne}/>;
                    })
                }
            </div>
            <Footer />
            <Outlet />
        </>
    )
}

export default Layout
