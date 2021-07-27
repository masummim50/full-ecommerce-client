import React from 'react';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductAction } from '../../redux/actions';
import './SIngleProduct.css'



const SingleProduct = ({product}) => {
  const {name,img, price, _id,category}= product;
  const [showaddedmessage, setshowaddedmessage]= useState(false);
  const [disablebutton, setDisable]= useState(false)
  const dispatch = useDispatch();
  const addProduct = (e,product)=>{
    setDisable(true)
    dispatch(addProductAction(product));
    showmessage()
    setDisable(false)
    e.preventDefault()
  }
  const showmessage = ()=> {
    setshowaddedmessage(true);
    setTimeout(()=>setshowaddedmessage(false),1000)
  };

  const deleteproduct = (e,product)=>{
    console.log(product);
    fetch(`http://localhost:5000/delete/${product._id}`,{
      method:'DELETE'
    })
    e.target.parentNode.parentNode.parentNode.innerHTML = ''
    e.preventDefault()
  }
  
  
  return (
    <div className="p-2 position-relative">
        {
          showaddedmessage ? <h1 className="added-message">Added successfully</h1>: false
        }
        <Link to={`/product/${category}/${_id}`} className="card text-decoration-none text-reset font-weight-bold product-shadow border-0">
          <img src={img} className="card-img-top p-3 w-50 m-auto" alt="..."/>
          <div className="card-footer">
            <h1 className="mb-2 product-name">{name.substr(0,20)}... </h1>
            
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-success price">{price}$</h4>
              <button onClick={(e)=>addProduct(e,product)} className="btn btn-small btn-success add-to-cart-button">Add to Cart</button>
              <button onClick={(e)=>deleteproduct(e,product)}>delete</button>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default SingleProduct;