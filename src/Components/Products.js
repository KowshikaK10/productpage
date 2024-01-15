import React, { useContext } from "react";
import { Carousel, Card, CardGroup, CardBody, CardTitle, CardSubtitle, Button} from "react-bootstrap";
import ContextData from "../Store/ContextData";
import { cardData} from "../data/data";
const Products = () => {
  const ctx = useContext(ContextData);

  const removeProductData=(product)=>{
    ctx.removeProduct(product)
    console.log(product);
  }


  const prod = ctx.products.map((product=>(   
        <Card
          style={{ maxWidth: "20rem" ,maxHeight:'80rem'}}
          border="light"
          key={product.id + `productid`}
        >
          <img src={product.image} alt="img" className='w-100 h-100'/>
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardSubtitle>{product.shortDescription}</CardSubtitle>
            <Card.Text>{product.description}</Card.Text>
            <p>{product.tags}</p>
            <h3>Price: ${product.price}</h3>
            <h4>Quantity: {product.quantity}</h4>
          </CardBody>
          <div>
          <Button className="me-5" onClick={()=>removeProductData(product)}>Delete</Button>
          <Button className="ms-5">Edit</Button>
          
          </div>
          
        </Card>
  )))

  return (
    <div>       
      <Carousel className="container w-70 ">       
        <Carousel.Item>
          <CardGroup className="ms-5 pe-5 ps-5 me-5">            
            {cardData.map((image) => (
              <Card style={{ width: "10rem" }} border="light" key={image.id + `productid`}>
                <img src={image.image} alt="img" className="w-100 h-50" />
                <CardBody>
                  <CardTitle>{image.name}</CardTitle>
                  <CardSubtitle>{image.shortDescription}</CardSubtitle>
                  <Card.Text>{image.description}</Card.Text>
                  <p>{image.tags}</p>
                  <h3>Price: ${image.price}</h3>
                  <h4>Quantity: {image.quantity}</h4>
                </CardBody>
                <div>
                <Button className="me-5" onClick={()=>removeProductData(image.id)}>Delete</Button>
                <Button className="ms-5">Edit</Button>
                </div>
              </Card>
            ))}
          </CardGroup>
        </Carousel.Item>
        {((ctx.products.length)>=1) ?  
        (<Carousel.Item>
            <CardGroup className="ms-5 pe-5 ps-5 me-5">{prod}</CardGroup>
        </Carousel.Item>) : ''        
         } 


       
      </Carousel>
    </div>
  );
};

export default Products;
