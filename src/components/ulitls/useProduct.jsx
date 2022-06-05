import React  from 'react'; 
import {useState , useEffect} from 'react';

const useProduct = () => {

 const [products , setProducts] = useState([])

        useEffect(() =>{

        fetch(`https://mocki.io/v1/b1f6c3da-ea29-4503-9c0e-1efd0e8efec1`)
        .then(res => res.json())
        .then(data => setProducts(data))

        },[])


    return [
        products,
        setProducts
    ];
};

export default useProduct;