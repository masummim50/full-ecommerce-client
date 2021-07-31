import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const formStructure = [
    {
      registerAs:'name',
      label:'name',
      labelText:'Enter Your Product Name',
      smallText:'This will be shown as your products main title',
      inputType:'text'
    },
    {
      registerAs:'category',
      label:'category',
      labelText:'Enter the category of your product',
      inputType:'text'
    },
    {
      registerAs:'seller',
      label:'seller',
      labelText:'Enter Your Seller Name',
      inputType:'text'
    },
    {
      registerAs:'price',
      label:'price',
      labelText:"Enter Your Product's price",
      inputType:'number'
    },
    {
      registerAs:'stock',
      label:'stock',
      labelText:'Enter Amount of Product in Stock',
      inputType:'number'
    }
  ]
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
    <div className="w-100 d-flex justify-content-center" style={{marginTop:'100px'}}>
      <form style={{width:'500px',maxWidth:'700px', backgroundColor:'green', padding:'10px 25px', color:'white'}} onSubmit={handleSubmit(submitProduct)}>
        {
          formStructure.map(eachinput=> 
            <div className="form-group">
              <label htmlFor={`${eachinput.label}`}>{eachinput.labelText}</label><br/>
              {
                eachinput.smallText !== undefined && <small>{eachinput.smallText}</small>
              }
              <input className="form-control" type={`${eachinput.inputType}`} {...register(`${eachinput.registerAs}`)} />
            </div>
            )
        }
        <div className="form-group">
          <input className="form-control" type="submit" value="Add Product" />
        </div>
        
      </form>
    </div>
  );
};

export default AddProduct;