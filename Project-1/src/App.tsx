import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [data, setData] = useState([])


 useEffect(() => {
fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((data) => setData(data))
console.log(data)
 },[])
  return (
    <>
    <th>
    <th>Id</th>
        <th>Producto</th>
        <th>Categoria</th>
        <th>Precio</th>
    {data?.map((item:any) => (
      <>
      <tr>{item.id}</tr>
      </>
      ))}
      </th>
    </>
  )
}

export default App
