import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProductAction, emptyDetailsPage, loadProductDetails, loadSameCategoryProducts } from '../../redux/actions';
import CustomHeader from '../Shared/Header/CustomHeader';
import SingleProduct from './SingleProduct';
import SkeletonCard from './SkeletonCard';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const {specificCategory,id} = useParams();
  const selectedProduct = useSelector((state)=> state.loadProductsReducer.selectedProduct);
  const sameCategoryProducts = useSelector((state)=> state.loadProductsReducer.sameCategoryProducts);
  
  // this is useeffect is used to prevent from staying at the middle of the page when clicked on a product.
  useEffect(()=>{
    window.scrollTo(0,0)
    dispatch(emptyDetailsPage())
    dispatch(loadProductDetails(id))
    dispatch(loadSameCategoryProducts(specificCategory))
  },[id])
  const {name, _id, price, img, category}= selectedProduct;
  // const selectedProduct = products.find(pr=>pr._id === id);
  // const {name, _id, price, img}= selectedProduct;


  return (
    <div className="mt-5 container">
      {
        selectedProduct.name ?
        <div className="d-flex">
          <div className="product-image bg-info p-2">
            <img src={img}/>
          </div>
          <div className="d-flex flex-column justify-content-between p-3">
            <div className="product-description">
              {name}
            </div>
            <div className="add-btn">
              <button className="btn btn-light" onClick={()=>dispatch(addProductAction(selectedProduct))}>Add to cart</button>
            </div>
          </div>
        </div> 
        :
        <SkeletonCard/>
      }
      <div className="text-center">
          <h4>Other products you might like</h4>
        </div>
      <div className="row row-cols-3 row-cols-md-4">
        
          {
          sameCategoryProducts.map(product=> <SingleProduct product={product}></SingleProduct>)
          }
      </div>
    </div>
  );
};

export default ProductDetails;