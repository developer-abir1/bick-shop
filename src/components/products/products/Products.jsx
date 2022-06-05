import React from 'react';
import tvs1 from '../../../images/images/TVS-Apache-RTR-160-Race-Edition.jpg';
import tvs2 from '../../../images/images/TVS-Apache-RTR-160-Rear-Disc.jpg';
import tvs3 from '../../../images/images/tvs-metro-plus-1637480581.jpg';
import tvs4 from '../../../images/images/tvs-ntorq-125-1629801326.jpg'; 
import useProduct from '../../ulitls/useProduct';
import ProductItem from '../ProductItem/ProductItem';
/* 
 [
    {
      "_id": "629cc8af14d00f5cd5308b9d",
      "price": "75201",
      "img": "https://i.ibb.co/1Q6t26m/TVS-Apache-RTR-160-Race-Edition.jpg",
      "name": "TVS Apache RTR Rear-Disc",
      "about": "Sit exercitation labore non eiusmod commodo eiusmod   commodo quis tempor magna adipisicing non.\r\n"
    },
    {
      "_id": "629cc8afd3d03c04c770b263",
      "price": "1580645",
      "img": "https://i.ibb.co/G7SLNpn/tvs-ntorq-125-1629801326.jpg",
      "name": "TVS Apache RTR Motor Plus",
      "about": "Qui exercitation dolore velit excepteur excepteur. Minim tur dolore fugiat ullamco id Lorem qui ad enim.\r\n"
    },
    {
      "_id": "629cc8afac44128fccaaa5db",
      "price": "87650",
      "img": "https://i.ibb.co/xMKNcfk/tvs-metro-plus-1637480581.jpg",
      "name": "TVS Apache RTR Rear-Disc",
      "about": "Non est consectetur enim consequat adipisicing ullamco anim nulla  "
    },
    {
      "_id": "629cc8af5f0c3f50a5c6ce39",
      "price": "49999",
      "img": "https://i.ibb.co/jZJG93X/TVS-Apache-RTR-160-Rear-Disc.jpg",
      "name": "TVS Apache RTR Race-Edition",
      "about": "Minim ut est velit dolor labore Lorem dolor ut elit eu ir "
    }
    
  ]
 */
const Products = () => {
  
 const [products ,setProducts] = useProduct() 
 
    return  <ProductItem  products={products} />
};

export default Products;