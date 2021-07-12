import React from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import CustomHeader from '../Shared/Header/CustomHeader';


const Home = () => {
  return (
    <div className="container-fluid">
      <CustomHeader/>
      <ProductContainer/>
    </div>
  );
};

export default Home;