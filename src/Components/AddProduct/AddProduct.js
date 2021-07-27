import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const {register, handleSubmit, formState:{ errors }, reset} = useForm();
  const submitProduct = (data)=>{
    console.log(data);
    fetch('http://localhost:5000/add-product', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(data)
    }).then(data=>{
      if(data.status === 200){
        reset()
      }
    })
  }
  return (
    <div style={{marginTop:'100px'}}>
      <form onSubmit={handleSubmit(submitProduct)}>
        <input type="text" {...register('name')} />
        <input type="text" {...register('category')} />
        <input type="text" {...register('seller')} />
        <input type="text" {...register('price')} />
        <input type="text" {...register('stock')} />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;