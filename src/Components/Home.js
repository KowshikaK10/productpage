import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselData from './CarouselData';
import LocationCard from './LocationCard';
import {images} from '../data/data'
import ProductAddForm from './ProductAddForm';
import ContextProvider from '../Store/ContextProvider';
import Products from './Products';
import { Button } from 'react-bootstrap';


const Home = () => {  
   const [addProductShow,setAddProductShow]=useState(false);
   const showAddProductHandler=()=>{
    setAddProductShow(true);
   }
   const hideAddProductHandler=()=>{
    setAddProductShow(false);
   }
  return (
    <>
      <Row className='text-center'>
        <Col xs={9}><CarouselData images={images}/></Col>        
        <Col ><LocationCard/></Col>
      </Row>
      <h5>TRENDING PRODUCTS</h5> 
      <ContextProvider>
        {!addProductShow && <Button onClick={showAddProductHandler}>Add Product</Button> }
        {addProductShow && <ProductAddForm closeProduct={hideAddProductHandler}/>}    
        
        
        
        <Products/>
      </ContextProvider>     
      
    </>
      
  );
}

export default Home