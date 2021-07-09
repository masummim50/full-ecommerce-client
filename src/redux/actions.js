import axios from "axios"
import { ADD_PRODUCT, EMPTY_ALL, EMPTY_DETAILS_PAGE, LOAD_PRODUCTS, LOAD_PRODUCT_DETAILS, LOAD_SAME_CATEGORY_PRODUCTS, LOAD_SEARCHED_PRODUCTS } from "./actionTypes"


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
  return {
    type:ADD_PRODUCT,
    payload:payload
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