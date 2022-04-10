import {PageTitle} from "./../components/PageTitle"

function ProductCard ({name,key,...props})
{
  return <li>{name} <span>{key}</span></li>
}

export default function Home() {
  const productData = [1,2,3,4,5,6]

  
  return (
    <>
    
    <PageTitle title="storefront" tagline ="featured products"/> 
    {
      productData.map(product => <ProductCard key={product} name={product}/>)
    }
    </>
  )
}
