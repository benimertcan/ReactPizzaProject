import './App.css';
import './Reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderPage from './components/OrderPage';
import Layout from './components/Layout';
import { useState } from 'react';
import OrderCompleted from './components/OrderCompleted';

function App() {
  const pizzaData = [
    {
      pizzaName: "Terminal Pizza",
      pizzaPrice: "60",
      path: "/products/pictures/food-1.png",
    },
    {
      pizzaName: "Position Absolute Acı Pizza",
      pizzaPrice: "60",
      path: "/products/pictures/food-2.png",
    },
    {
      pizzaName: "useEffect Tavuklu Burger",
      pizzaPrice: "60",
      path: "/products/pictures/food-3.png",
    },
  ];

  const [choosenOne, setChoosenOne] = useState({
    isim: "",
    boyut: "",
    hamur: "Normal",
    pizzaName: "Position Absolute Acı Pizza",
    pizzaPrice: "60",
    malzemeler: [],
    notext: "",
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout pizzaData={pizzaData} setChoosenOne={setChoosenOne} choosenOne={choosenOne} />} />
        <Route path="/order" element={<OrderPage pizzaData={choosenOne} setChoosenOne={setChoosenOne} />} />
        <Route path="/order-completed" element={<OrderCompleted pizzaData={choosenOne} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
