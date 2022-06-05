import Link from 'next/link';
import React from 'react';
import ProductsList from '../ProductsList/ProductsList';

const ProductItem = ({products}) => {
     
    return (
         <section className='container'>
            <h1 className='mt-4 fw-bolder my-4 px-4 py-4'>Hot List </h1>
           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4">
             {
             products.slice(0,8).map(item =><ProductsList key={item.id} item={item}/>)
             
             }

         </div>
         
       <div className='  py-5 d-flex justify-content-center'>
           <Link href={"/products"}>
         <button className='px-5 py-2 btn btn-warning  fw-bold '>All Product</button>
         </Link>
       </div>
         </section>
    );
};

export default ProductItem;