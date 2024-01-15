import React, { useContext} from 'react'
import ContextData from '../Store/ContextData';


const ProductAddForm = (props) => {
    const ctx=useContext(ContextData);

    const addProductData=(e)=>{
        e.preventDefault();
        const obj={
            id: e.target[0].value,
            name: e.target[1].value,
            image: e.target[2].value,
            shortDescription: e.target[3].value,
            description: e.target[4].value,
            tags: [e.target[5].value],
            price: e.target[6].value,
            quantity: e.target[7].value,
        }
        ctx.addProduct(obj);
        props.closeProduct();           
    }
    

  return (
    <>
    <form onSubmit={addProductData}>
        <input type="text" name="id" placeholder='id' className='mt-3 p-2'/><br/>
        <input type="text" name="name" placeholder='name' className='mt-3 p-2'/><br/>
        <input type="text" name="image" placeholder='imageUrl' className='mt-3 p-2'/><br/>
        <input type="text" name="shortDescription" placeholder='shortDescription' className='mt-3 p-2'/><br/>
        <input type="text" name="description" placeholder='description' className='mt-3 p-2'/><br/>
        <input type="text" name="tags" placeholder='tags' className='mt-3 p-2'/><br/>
        <input type="number" name="price" placeholder='price' className='mt-3 p-2'/><br/>
        <input type="number" name="quantity" placeholder='quantity' className='mt-3 p-2'/><br/><br/>
        <button >Submit</button>
    </form>
    
    </>
    
  )
}

export default ProductAddForm