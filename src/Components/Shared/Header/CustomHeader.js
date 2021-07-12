import { faCartPlus, faSearch, faSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emptyAll, loadSearchedProducts } from '../../../redux/actions';
import './Header.css'

const CustomHeader = () => {


  const allLinks = [
    {name:'Your Cart', icon:faCartPlus, route:'/yourcart'},
    {name:'Sign In', icon:faSign, route:'/signin'}
  ];

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
  const onEnterClick = (e)=>{
    if(e.key ==='Enter'){
      performSearch()
    }
  }

  return (
    <div className="container-fluid">
      <div className="header-row row bg-success d-flex align-items-center">
        <div className="col-2">
          <Link className="text-white text-decoration-none" to="/">
            <h1>Logo</h1>
          </Link>
        </div>
        <div className="col-5">
          <div class="form-inline d-flex">
            <input onKeyDown={(e)=>onEnterClick(e)} ref={searchWord} class="form-control w-75" type="search" placeholder="Search" aria-label="Search"/>
            <button onClick={()=>performSearch()} class="btn btn-outline-white text-white my-2 my-sm-0 btn-small header-links">
              <FontAwesomeIcon icon={faSearch}/>
            </button>
          </div>
        </div>
        <div className="col-5">
          <div className="links d-flex justify-content-center">
            {
              allLinks.map(
                link=> 
                <Link to={`${link.route}`} className="text-white text-decoration-none header-links">
                  <span className="link-icon mr-2">
                    <FontAwesomeIcon icon={link.icon}/>
                    {addedProducts.length}
                  </span>
                  <span className="link-name">
                    {link.name}
                  </span>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;