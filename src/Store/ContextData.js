import React from 'react'

const ContextData = React.createContext({
    products:'',
    addProduct: (item)=>{},
    removeProduct:(id)=>{}
  })

export default ContextData