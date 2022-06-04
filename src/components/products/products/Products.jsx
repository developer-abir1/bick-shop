import React from 'react';
import tvs1 from '../../../images/images/TVS-Apache-RTR-160-Race-Edition.jpg';
import tvs2 from '../../../images/images/TVS-Apache-RTR-160-Rear-Disc.jpg';
import tvs3 from '../../../images/images/tvs-metro-plus-1637480581.jpg';
import tvs4 from '../../../images/images/tvs-ntorq-125-1629801326.jpg'; 
import ProductItem from '../ProductItem/ProductItem';

const productsList = [
    {
        id:54,
        name:'TVS Apache RTR Race-Edition',
        img:tvs1,
        price:175200,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odit ducimus odio impedit nostrum et quos numquam nemo reiciendis blanditiis, fuga autem, rem nam deserunt corrupti soluta totam laborum!TVS-Apache-RTR-160-Rear-Disc'
    },
    {
        id:32,
        name:'TVS Apache RTR Rear-Disc',
        img:tvs2,
        price:175200,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odit ducimus odio impedit nostrum et quos numquam nemo reiciendis blanditiis, fuga autem, rem nam deserunt corrupti soluta totam laborum!TVS-Apache-RTR-160-Rear-Disc'
    },
    {
        id:21,
        name:'TVS Apache RTR Motor Plus',
        img:tvs3,
        price:175200,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odit ducimus odio impedit nostrum et quos numquam nemo reiciendis blanditiis, fuga autem, rem nam deserunt corrupti soluta totam laborum!TVS-Apache-RTR-160-Rear-Disc'
    },
    {
        id:24,
        name:'TVS Apache RTR ntorq',
        img:tvs4,
        price:175200,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odit ducimus odio impedit nostrum et quos numquam nemo reiciendis blanditiis, fuga autem, rem nam deserunt corrupti soluta totam laborum!TVS-Apache-RTR-160-Rear-Disc'
    },
    {
        id:26,
        name:'TVS Apache RTR ntorq',
        img:tvs4,
        price:175200,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odit ducimus odio impedit nostrum et quos numquam nemo reiciendis blanditiis, fuga autem, rem nam deserunt corrupti soluta totam laborum!TVS-Apache-RTR-160-Rear-Disc'
    },
    {
        id:27,
        name:'TVS Apache RTR ntorq',
        img:tvs4,
        price:175200,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odit ducimus odio impedit nostrum et quos numquam nemo reiciendis blanditiis, fuga autem, rem nam deserunt corrupti soluta totam laborum!TVS-Apache-RTR-160-Rear-Disc'
    },
]

const Products = () => {
    return  <ProductItem  products={productsList} />
};

export default Products;