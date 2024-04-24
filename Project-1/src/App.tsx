import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [data, setData] = useState([])


 useEffect(() => {
fetch('https://reqres.in/api/users')
.then((response) => response.json())
.then((data) => setData(data.data))
console.log(data)
 },[])
  return (
    <>
    {data?.map((item:any) => (
      <>
      <tr> 
      <th><img src={item.avatar}></img></th>
     <th><p>{item.id}</p></th>
     <th><h1>{item.first_name}</h1></th> 
     <th><h1>{item.email}</h1></th>
      </tr>
      
      </>
      ))}
    </>
  )
}

export default App
