import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CarouselData = (props) => {
  const [selectedImageIndex, setSelectedImage] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedImage(index);
  };
  return (
    <div className='bg-light pb-2'>
      <Carousel activeIndex={selectedImageIndex} onSelect={(index) => setSelectedImage(index)}>
        {props.images.map((image)=>(
           <Carousel.Item key={image.id}> 
           <img
             className="d-block w-100"
             src={image.link}
             alt="slide"
           />
         </Carousel.Item>
      ))}
       
      </Carousel>

      <div className='buttonImage'>
      <Row className='g-0'>
        <Col xs={3}><Button variant="outline-dark" size="lg" className="w-100"  onClick={() => handleButtonClick(0)}>Premium Picks</Button></Col>
        <Col xs={3}><Button variant="outline-dark" size="lg" className="w-100" onClick={() => handleButtonClick(1)}>Best Selling</Button></Col>
        <Col xs={3}><Button variant="outline-dark" size="lg" className="w-100" onClick={() => handleButtonClick(2)}>Best of Brands</Button></Col>
        <Col xs={3}><Button variant="outline-dark" size="lg" className="w-100" onClick={() => handleButtonClick(3)}>Sports Shoes</Button></Col>
      </Row>     
      </div>
    </div>
  );
}

export default CarouselData