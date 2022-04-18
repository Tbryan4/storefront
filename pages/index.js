import {PageTitle} from "./../components/PageTitle"
import {useState,React,useEffect} from 'react'
import {ProductCard} from '../components/ProductCard'
import {loadStripe} from "@stripe/stripe-js"

// api https://storefront-4a3db-default-rtdb.firebaseio.com/

export default function Home(props) {
  const products = props.products

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  useEffect(()=>{
    async function loadExternalDataTheCRAWay(){
     const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
     const data = await res.json()
     //setUserData(data)
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
  return {
    props:{
      products
    },
    // checks the data every 60 seconds
    revalidate:60
  }
}
