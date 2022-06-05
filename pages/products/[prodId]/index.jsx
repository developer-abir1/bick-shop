import  {useRouter}  from 'next/router';
import React from 'react';
import Layouts from '../../../src/components/Layouts/Layouts';
import { productsList } from '../../../src/components/products/products/Products'; 
import Image from 'next/image'
const index = (   ) => {

    const route = useRouter();
    const {prodId}  = route.query;

    const singleProduct = productsList.find(pd => pd.id == prodId)     
const imagesView =() =>{
     console.log(singleProduct?.img )
}
    return (
        <Layouts>
           <h1>Product id {prodId}</h1>
           <Image loader={imagesView} src="me.png" width={500} height={500} alt='' />
        </Layouts>
    );
};

export default index;