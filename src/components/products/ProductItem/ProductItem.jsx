import React from 'react';
import ProductsList from '../ProductsList/ProductsList';

const ProductItem = ({products}) => {
     
    return (
         <section className='container'>
            <h1 className='mt-4 fw-bolder my-4 px-4 py-4'>Hot List </h1>
           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-4">
             {
             products.map(item =><ProductsList key={item.id} item={item}/>)
             
             }
         </div>
         </section>
    );
};

export default ProductItem;