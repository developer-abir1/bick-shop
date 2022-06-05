import Head from 'next/head'
import Image from 'next/image'
import Carousels from '../src/components/carousel/Carousel'
import Layouts from '../src/components/Layouts/Layouts'
import Products from '../src/components/products/products/Products'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div  >
     

      <Layouts>
        <Carousels />
        <Products />
      </Layouts>
    </div>
  )
}
