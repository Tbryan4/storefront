import {PageTitle} from "./../components/PageTitle"
import {Button} from '../components/Button'
import {useState,React} from 'react'



export default function Home() {
  const [isLoading, setisLoading] = useState(false);
  console.log(isLoading)

  
  return (
    <>
    <PageTitle title="storefront" tagline ="featured products"/> 
    <div style={{textAlign:'center'}}>
      {/* !isloading is toggling back and forth */}
      <Button onClick={()=>setisLoading(!isLoading)}
      >Get Some Data</Button>
      {
      
        isLoading || <p>Output</p>
      }
    </div>
    </>
  )
}
