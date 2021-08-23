import React from 'react';

const SingleProductInCart = ({product}) => {
  const {name, id, price, img, quantity, combinePrice}= product;
  console.log(product)
  return (
    <div className="d-flex p-2">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="details d-flex justify-content-between w-100">
        <div className="text">
          {name}<br/>
          {price}
          combinePrice: {combinePrice}
        </div>
        <div className="action-btns">
          <button className="btn btn-success">+</button>
          <span>{quantity}</span>
          <button className="btn btn-danger">-</button>
        </div>
      </div>

    </div>
  );
};

export default SingleProductInCart;