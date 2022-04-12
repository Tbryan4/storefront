import {PageTitle} from "./../components/PageTitle"
import {Button} from '../components/Button'
import {useState,React,useEffect} from 'react'
import {User} from '../components/User'



export default function Home() {
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
    <div style={{textAlign:'center'}}>
      {/* !isloading is toggling back and forth */}
      <button onClick={()=>setisLoading(!isLoading)}
      >Get Some Data</button>
      {
      
        isLoading || <p>Output</p>
      }
      <main>
        {
          userData.map(({id, name, email, username}) => <User key={id} name={name} email={email} username={username} />)
        }
      </main>
    </div>
    </>
  )
}
