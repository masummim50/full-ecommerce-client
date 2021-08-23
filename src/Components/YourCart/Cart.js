import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadProductsReducer } from './../../redux/allReducer';
import SingleProductInCart from './SingleProductInCart';

const Cart = () => {
  const addedProducts = useSelector((state)=>state.loadProductsReducer.addedProducts);
  
 
  return (
    <div className="mt-5">
      {
        addedProducts.map(a=> <SingleProductInCart product={a}/>)
      }
    </div>
  );
};

export default Cart;