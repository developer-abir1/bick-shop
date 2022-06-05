import React from 'react'; 
import Layouts from '../../src/components/Layouts/Layouts';
import ProductItem from '../../src/components/products/ProductItem/ProductItem';
import { productsList } from '../../src/components/products/products/Products';
import Image from 'next/image';
import Link from 'next/link'

const index = () => {


    return (
        <Layouts>
     <div className='container py-5 '>
         <h1 className='px-2 py-3 '>Hot <span className=' text-warning'>Collaction</span></h1>
     <div  className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4   ">
         {

             productsList.map((item , index) =>{
              
              {
                const { img ,name ,price , id} = item
                return(
                  <Link href={`/products/${id}`}>
                    <div key={index} className="col">
                    <div className="card shadow-sm border-0">
                      <Image   src={img} className="card-img-top w-75" alt="..."/>
                      <div className="card-body text-center">
                        <h5 className="card-title fs-6 " >{name}</h5>
                        <p className="card-text text-secondary   text-start">This is a longer  </p>
                
                       <div className='d-flex justify-content-between   align-items-center'>
                           <span className='fw-bold  '>$ {price}</span>
                
                           <button className='btn btn-outline-warning text-black  '>Buy Now</button>
                       </div>
                      </div>
                    </div>
                  </div> 
                  </Link>
                ) 
              }
             })
         }
          </div> 
     </div>
        </Layouts>
    );
};

export default index;