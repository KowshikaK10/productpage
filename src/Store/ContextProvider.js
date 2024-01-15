import React, { useEffect, useState } from 'react'
import ContextData from './ContextData';
import { GetProduct , PostProduct} from '../Components/ApiData';

const ContextProvider = (props) => {
    const[addProduct,setAddProduct]=useState([]);
   
    const addProductHandler=(product)=>{  
      const postProduct= PostProduct();
      if(product){
        setAddProduct((prevItems)=>{
          return [...prevItems,product]
        })
       
      }else if(!product){
          
        setAddProduct((prevItems)=>{
          return [...prevItems,postProduct]
        }) 
      } else if(!product && !postProduct){
        const getProducts= GetProduct();
        setAddProduct((prevItems)=>{
          return [...prevItems,getProducts]
        }) 
      }
        
    }
    
    const removeProductHandler=product=>{
        let productData=[...addProduct];
        const newItems=productData.filter((items)=>{
            return items.id !== product.id})
        setAddProduct(newItems);
    }

    const contextData={
        products:addProduct,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler
    }
  return (
    <ContextData.Provider value={contextData}>
      {props.children}
         
    </ContextData.Provider>
  )
}

export default ContextProvider