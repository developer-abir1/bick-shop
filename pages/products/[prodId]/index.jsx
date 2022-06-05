import  {useRouter}  from 'next/router';
import React from 'react';
import Layouts from '../../../src/components/Layouts/Layouts';
import { productsList } from '../../../src/components/products/products/Products'; 
import Image from 'next/image'
import useProduct from '../../../src/components/ulitls/useProduct';
const index = (   ) => {

    const [products ] = useProduct() ;

    const route = useRouter();
    const {prodId}  = route.query;
 const singleProuct = products.find(pd => pd._id === prodId)  
    return (
        <Layouts>
            
     <div className="container">
     <div className="row  py-5">
          <div className="col-md-6 flex-column-reverse">
           <img className='img-fluid' width={500} src={singleProuct?.img} alt="" />             
          </div>
          <div className="col-md-6 ">
              <h1 className='my-5'> {singleProuct?.name}</h1>
               <p className='my-3'><span className='fw-bold'>Discription: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus fuga perferendis cumque. Quaerat, aspernatur neque? Assumenda, sequi quo autem soluta id totam sapiente labore at velit, est cum nostrum?</p>
               <h4>Price: ${singleProuct?.price}</h4>
               <div className=' py-5'>
                <button className=' btn btn-danger'>Shop Now</button>
               </div>
          </div>
      </div>
     </div>
        </Layouts>
    );
};

export default index;