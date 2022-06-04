import React from 'react';
import motorbick1 from '../../images/images/motorcycle-studio-3d-rendering-illustration_37416-192 (1).png'
import motorbick2 from '../../images/images/motorcycle-studio_37416-145.jpg'
import motorbick3 from '../../images/images/man-hand-turning-ignition-key-ebike_114579-351.png' ;
import Image from 'next/image'
import classes from './Carousel.module.css';  
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const Carousels = () => {

 
    return (
     <div>
       <Swiper  >
      <SwiperSlide className={[classes.images, ]} style={{height:'500px'}}> 
  
       <div className="row d-flex justify-content-center align-items-center" style={{height:'500px'}} c>
         <div className="col-md-6">

         </div>
         <div className="col-md-6 ">
          <h1 className='text-white d-flex justify-content-center'>  <span>  Do You Have   </span>{" "} <span className={classes.logoText}>  A Choice </span>   </h1>
          <div className='d-flex justify-content-center mt-4'>
          <button className='btn btn-outline-info  '>Booking Now </button>
          <button className='btn btn-warning ms-4'>Shop Now</button>
          </div>
         </div>
       </div>
      </SwiperSlide>
     
      <SwiperSlide className={[classes.images2, ]} style={{height:'500px'}}> 
  
       <div className="row d-flex justify-content-center align-items-center" style={{height:'500px'}} c>
         <div className="col-md-6">

         </div>
         <div className="col-md-6 "> 
          <h1 className='text-white d-flex justify-content-center'>  <span  >  Do You Have  </span>{"  "} <span className={[classes.logoText, ]}> A Choice </span>   </h1>
          <div className='d-flex justify-content-center mt-4'>
          <button className='btn btn-outline-info  '>Booking Now </button>
          <button className='btn btn-warning ms-4'>Shop Now</button>
          </div>
         </div>
       </div>
      </SwiperSlide>
     
       
    </Swiper>
     </div>
    );
};

export default Carousels;