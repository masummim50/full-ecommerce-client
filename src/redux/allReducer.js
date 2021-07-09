
const initialState = {
  allProducts: [],
  addedProducts:[],
  selectedProduct:{},
  searchedProducts:[],
  sameCategoryProducts:[]
}
export const loadProductsReducer = (state=initialState, {type, payload})=> {
  switch(type){
    case 'LOAD_PRODUCTS':
      return {...state, allProducts:payload};
    case 'LOAD_SEARCHED_PRODUCTS':
      return {...state, allProducts:payload};
    case 'EMPTY_ALL':
      return {...state, allProducts:[]}
    case 'EMPTY_DETAILS_PAGE':
      return {...state, selectedProduct:{}}
    case 'ADD_PRODUCT':
      return {...state, addedProducts: [...state.addedProducts, payload]};
    case 'LOAD_PRODUCT_DETAILS':
      return {...state, selectedProduct:payload[0]}
    case 'LOAD_SAME_CATEGORY_PRODUCTS':
      return {...state, sameCategoryProducts:payload}
    default:
      return state;
  }
}