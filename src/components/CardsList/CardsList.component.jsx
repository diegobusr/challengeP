import React from 'react'
import CustomCard from '../CustomCard';
import './CardsList.css';

const CardsList = ({products}) => {
  
  return (   
    <div className="CardsContainer">
      {products.map((prod) => <CustomCard key={prod.id} product={prod} /> )}
    </div>
  )
}

export default CardsList;