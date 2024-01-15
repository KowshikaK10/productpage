import React from 'react';
import {Card,CardBody,CardSubtitle,CardTitle} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const LocationCard = () => {
  return (
    <Card style={{ width: '20rem' , padding:'1.5rem'}} className='cardData' border="light">
    <img alt="Sample"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4KsYYlN84msMd7FfKDu4gOOEDYGp_0627w&usqp=CAU" />
    <CardBody >
      <CardTitle tag="h5" className='mt-3'>Your Delivery Pincode</CardTitle>
      <CardSubtitle className="mt-3 text-muted pt-1"tag="h6">Enter your pincode to check availability and faster delivery options.</CardSubtitle>
      <input type="text" name="pincode" placeholder='Enter your pincode' className='mt-3 p-2'/>
      <div className='mt-3'>
        <Button variant="dark" size="lg" className="btn w-50 me-1">Submit</Button>
        <Button variant="outline-dark" size="lg" className="btn btn-outline-primary ms-1">Next</Button>
      </div>
      
    </CardBody>
  </Card>
  )
}
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQ7WqehYCd_qkxT2UdYdjd8PCo5uCQ-qKJA&usqp=CAU
export default LocationCard