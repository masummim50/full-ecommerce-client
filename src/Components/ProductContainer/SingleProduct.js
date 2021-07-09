import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductAction } from '../../redux/actions';




const SingleProduct = ({product}) => {
  const {name,img, price, _id,category}= product;
  const dispatch = useDispatch();
  const addProduct = (product)=>{
    dispatch(addProductAction(product))
  }
  return (
    <div className="p-2">
        <Link to={`/product/${category}/${_id}`} className="card text-decoration-none text-reset font-weight-bold product-shadow border-0">
          <img src={img} className="card-img-top p-3 w-75 m-auto" alt="..."/>
          <div className="card-footer">
            <p className="mb-2">{name.substr(0,23)}... </p>
            
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-success">{price}$</h4>
              <button onClick={()=>addProduct(product)} className="btn btn-small btn-success">Add to Cart</button>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default SingleProduct;