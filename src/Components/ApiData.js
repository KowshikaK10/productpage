
import axios from 'axios';
import { useEffect, useState } from 'react';


const apiUrl = 'https://65a4850d52f07a8b4a3d6eb0.mockapi.io/products/product';


 const GetProduct=()=>{
    const[addProduct,setAddProduct]=useState([]);
    useEffect(()=>{
        const axiosGetProduct=async()=>{
          try{
            const getProducts=await axios.get(apiUrl);
            setAddProduct(getProducts)
          }catch(err){
            console.log(err);
          }        
        }
        axiosGetProduct();
      },[]);
      return addProduct;           
}

 const PostProduct=()=>{
    try{
        const response= axios.post(apiUrl,{id:''})
         return response.data
    }
    catch(err){
         console.log(err);
    }
}

export {GetProduct , PostProduct}
