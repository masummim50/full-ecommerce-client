import React from 'react';
import { useSelector } from 'react-redux';
import { loadProductsReducer } from './../../redux/allReducer';

const Cart = () => {
  const addedProducts = useSelector((state)=>state.loadProductsReducer.addedProducts)
  return (
    <div className="mt-5">
      {
        addedProducts.map(a=><ul>
          <li>this is name: {a.name}</li>
          <li>{a.price}</li>
          <li>{a.combinePrice}</li>
          <li>{a.quantity}</li>
        </ul>)
      }
    </div>
  );
};

export default Cart;