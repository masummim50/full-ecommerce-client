import axios from "axios"
import { ADD_PRODUCT, EMPTY_ALL, EMPTY_DETAILS_PAGE, LOAD_MORE_PRODUCTS, LOAD_PRODUCTS, LOAD_PRODUCT_DETAILS, LOAD_SAME_CATEGORY_PRODUCTS, LOAD_SEARCHED_PRODUCTS } from "./actionTypes"
import { loadProductsReducer } from './allReducer';
import { store } from './store';


export const loadProducts = ()=>{
  return function(dispatch){
    axios.get('http://localhost:5000/allProducts')
    .then(response=> {
      dispatch({type:LOAD_PRODUCTS, payload:response.data})
    })
  }
}

export const loadSearchedProducts = (payload)=>{
  return function(dispatch){
    axios.get('http://localhost:5000/allProducts')
    .then(response=> {
      console.log(response.data)
      let filtered = response.data.filter(pr=>pr.name.toLowerCase().search(payload.toLowerCase().replace(' ', '|'))>-1);
      if(filtered.length === 0){
        filtered = 'notFound';
        console.log(filtered)
      }
      dispatch({type:LOAD_SEARCHED_PRODUCTS, payload:filtered})
    })
  }
}

export const loadProductDetails = (payload)=>{
  return function(dispatch){
    axios.get('http://localhost:5000/allProducts')
    .then(response=> {
      console.log('response from details', response.data.filter(d=>d._id===payload))
      dispatch({type:LOAD_PRODUCT_DETAILS, payload:response.data.filter(d=> d._id===payload)})
    })
  }
}

export const emptyAll = ()=>{
  return {
    type:EMPTY_ALL
  }
}

export const emptyDetailsPage = ()=>{
  return {
    type:EMPTY_DETAILS_PAGE
  }
}

export const addProductAction = (payload)=>{
  return function(dispatch, getState){
    let {addedProducts}= getState().loadProductsReducer;
    let foundproduct = addedProducts.find(a=>a._id===payload._id);
    console.log('foundproduct', foundproduct);
    console.log('payload', payload)
    let newAddedProducts = [];
      if(foundproduct===undefined){
        payload.quantity = 1;
        payload.combinePrice= payload.price;
        newAddedProducts = [...addedProducts, payload];
      }else{
        payload.quantity = foundproduct.quantity + 1;
        payload.combinePrice = payload.price*payload.quantity;
        addedProducts = addedProducts.filter(pr=>pr._id!==payload._id);
        newAddedProducts = [...addedProducts, payload];
      }
        dispatch({type:ADD_PRODUCT, payload:newAddedProducts})
  }
}

// load more products action
export const loadMoreProducts = (payload)=>{
  return function(dispatch, getState){
    let {allProducts} = getState().loadProductsReducer;
    axios.get(`http://localhost:5000/allProducts/showing/${payload}`)
    .then(response => 
    dispatch({type:LOAD_MORE_PRODUCTS, payload:response.data})
    )
  }
}

export const loadSameCategoryProducts = (payload)=>{
  return function(dispatch){
    axios.get('http://localhost:5000/allProducts')
    .then(response=> {
      dispatch({type:LOAD_SAME_CATEGORY_PRODUCTS, payload:response.data.filter(d=> d.category===payload)})
    })
  }
}
