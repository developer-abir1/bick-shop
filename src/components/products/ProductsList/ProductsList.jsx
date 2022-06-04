import Image from 'next/image';
import React from 'react';
 
const ProductsList = (props) => {
    const {name, img , price} = props.item
    return (
        <div>
           
  <div className="col">
    <div className="card shadow-sm border-0">
      <Image src={img} className="card-img-top w-75" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title fs-6 " >{name}</h5>
        <p className="card-text text-secondary   text-start">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

       <div className='d-flex justify-content-between   align-items-center'>
           <span className='fw-bold  '>${price}</span>

           <button className='btn btn-outline-warning text-black  '>Buy Now</button>
       </div>
      </div>
    </div>
  </div> 
        </div>
    );
};

export default ProductsList;