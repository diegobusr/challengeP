import React, { useState, useEffect } from 'react';
import CardsList from './components/CardsList';
import Fletch from './assets/images/Fletch.svg';
import Logo from './assets/images/Logo.svg';
import './App.css';

const App = () => {

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch('https://api.bigcartel.com/endlehomegoods/products.js')
    .then(res => res.json())
    .then(data => setProducts(data.slice(0, 9)));
  }

  useEffect(() => {
    getProducts();
  }, [])
  
  return (
    <div className='App'>
      <div className='Header'>
        <img src={Logo} alt=''/>
        <img src={Fletch} alt=''/>
      </div>
      <CardsList products={products}></CardsList>
    </div>
  );
}

export default App;
