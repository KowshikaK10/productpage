import './App.css';
import Home from './Components/Home';
import {  Route, Routes } from "react-router";
import { GetProduct , PostProduct} from './Components/ApiData';
import React from 'react';

function App() {
  return (
    <div  className='container-fluid'>
      
      <Home/>
      <Routes>
     
          <Route  path="/get" element={<GetProduct/>} />
          <Route  path="/post" element={<PostProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
