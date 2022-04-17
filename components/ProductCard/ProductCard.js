import React from 'react';
import Image from 'next/image'
import Button from '../Button/Button'

import {productCard, price, name, description,ButtonPressed} from './styles.module.scss'


function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, productDescription, imageUrl} = {...product};

  return (
         <aside className={productCard}>
           <header>
             <Image 
                src={imageUrl}
                alt={productName}
                width={400}
                height={250}
                quality={50}
             />
            
           </header>
             <h2 className={name}>{productName}</h2>
             <p className={price}>{productPrice}</p>
             <p className={description}>{productDescription}</p>
             <footer>
               <form action='#' method='POST'>
                 <input type='hidden' name="uid" value="uid"/>
                 <Button className={ButtonPressed} type="submit">Buy Now</Button>
               </form>
             </footer>
         </aside>
  )
}

export default ProductCard