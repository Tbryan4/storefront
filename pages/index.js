import {PageTitle} from "./../components/PageTitle"
import {Button} from '../components/Button'
import {useState,React,useEffect} from 'react'
import {User} from '../components/User'
import {ProductCard} from '../components/ProductCard'

// api https://storefront-4a3db-default-rtdb.firebaseio.com/

export default function Home(props) {
  console.log(props)
  const products = props.products
  const [isLoading, setisLoading] = useState(false);
  const [userData, setUserData] = useState([])
 
  useEffect(()=>{
    async function loadExternalDataTheCRAWay(){
     const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
     const data = await res.json()
     setUserData(data)
    }

    loadExternalDataTheCRAWay()
  })

  
  return (
    <>
    <PageTitle title="storefront" tagline ="featured products"/> 
      <main>
          { products.map(product=> <ProductCard key={product.uid} product={product}/>)}
      </main>
    </>
  )
}

export async function getStaticProps() {
  //outputting to the server
  //fetching json api
  const res = await fetch('https://storefront-4a3db-default-rtdb.firebaseio.com/shoes.json')
  // awaiting recieving that data
  const productData = await res.json()
  const products = Object.values(productData)
  console.log(productData)
  return {
    props:{
      products
    }
  }
}
