import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyAll, loadProducts } from '../../redux/actions';
import SingleProduct from './SingleProduct';
import SkeletonCard from './SkeletonCard';



const ProductContainer = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state)=> state.loadProductsReducer.allProducts);
  const url = window.location.href;
  const loadingDecision = ()=> {
    dispatch(emptyAll())
    url === 'http://localhost:3000/' && dispatch(loadProducts())
  }
  useEffect(()=>{
    loadingDecision();
    console.log('after search', allProducts)
  },[url]);


  return (
    <div>
      {
          typeof(allProducts)==='string' ? 
          <div className="text-center" style={{height:'100vh'}}>
            <h2 className="text-danger">
              Sorry, no such item found<br/> try a different keyword?
            </h2>
          </div>
        
        :
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