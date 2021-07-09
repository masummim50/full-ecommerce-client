import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emptyAll, loadSearchedProducts } from '../../../redux/actions';


const Header = () => {
  const addedProducts = useSelector((state)=> state.loadProductsReducer.addedProducts);
  const searchWord = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  // history.push isn't working. its still dispatching all product loading action.
  const performSearch = ()=>{
    const wordTyped = searchWord.current.value;
    history.push(`/${wordTyped}`)
    dispatch(emptyAll());
    dispatch(loadSearchedProducts(wordTyped));
    searchWord.current.value = '';
    searchWord.current.focus();
  }
  
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/' class="navbar-brand" href="#">Navbar</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cart({addedProducts.length})</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        
        <div class="form-inline my-2 my-lg-0">
          <input ref={searchWord} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button onClick={()=>performSearch()} class="btn btn-outline-success my-2 my-sm-0">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;