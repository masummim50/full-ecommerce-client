import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyAll, loadMoreProducts, loadProducts } from '../../redux/actions';
import SingleProduct from './SingleProduct';
import SkeletonCard from './SkeletonCard';



const ProductContainer = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state)=> state.loadProductsReducer.allProducts);
  const url = window.location.href;
  const loadingDecision = ()=> {
    if(url === 'http://localhost:3000/'){
    dispatch(emptyAll())
    dispatch(loadProducts())
    }
    
  }
  useEffect(()=>{
    loadingDecision();
  },[url]);
  const loadmore = ()=>{
      dispatch(loadMoreProducts(allProducts.length));
      
      // need to figure out a way to showing loading spinner for load more button. need to find if the state of allproduct changed
  }



  return (
    <div>
      {
          typeof(allProducts)==='string' ? 
          <div className="text-center mt-5" style={{height:'100vh'}}>
            <h2 className="text-danger">
              Sorry, no such item found<br/> try a different keyword?
            </h2>
          </div>
        
        :
          allProducts.length>0 ? <>
          <div className="mt-5 row row-cols-3 row-cols-md-4">
          {
          allProducts.map(product=> <SingleProduct product={product}></SingleProduct> )
          }
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-info" onClick={loadmore}>Load more</button>
          </div>
          </>
        :
          <div className="row row-cols-3 row-cols-md-4 mt-5">
          {
            Array(20).fill().map(number=> <SkeletonCard/>)
          } 
          </div>
      }
      
      {/* {
        allProducts.length>0 ?
        <div className="row row-cols-3 row-cols-md-4">
          {
          allProducts.map(product=> <SingleProduct product={product}></SingleProduct> )
          }
        </div> 
        :
        <div className="row row-cols-3 row-cols-md-4">
        {
          Array(20).fill().map(number=> <SkeletonCard/>)
        } 
        </div>
      } */}
    </div>
  );
};

export default ProductContainer;