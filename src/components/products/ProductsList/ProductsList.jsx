import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
 
const ProductsList = (props) => {
    const {name, img , price , _id} = props.item
    console.log(props)
   
    return (
      <Link href={`/products/${_id}`} passHref> 
    <div className="col">
      
    <div className="card shadow-sm border-0">
       <img src={img}   alt="" />
      <div className="card-body text-center">
        <h5 className="card-title fs-6 " >{ name}</h5>
        <p className="card-text text-secondary   text-start">This is a longer  </p>

       <div className='d-flex justify-content-between   align-items-center'>
           <span className='fw-bold  '>$ {price}</span>

           <button className='btn btn-outline-warning text-black  '>Buy Now</button>
       </div>
      </div>
    </div>
 
  </div> 
  </Link>
  
         
    );
};

export default ProductsList;