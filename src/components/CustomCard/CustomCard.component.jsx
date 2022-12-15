import React from 'react'
import './CustomCard.css'

const MAX_CHARACTERS = 250

const CustomCard = ({product}) => {

  const { name, description } = product

  return (   
    <div className='Card'>
      <img className='CustomImg' src={product.images[0].url} alt=''/>
      <h3 > {name} </h3>
      {description.length > MAX_CHARACTERS ? <p> {`${description.substring(0, MAX_CHARACTERS)}...`} </p> : <p> {description} </p> }
    </div>
  )
}

export default CustomCard;