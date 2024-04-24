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
   <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Precio</th>
        <th>Titulo</th>
        <th>Categoria</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
    {data?.map((item:any) => (
      <>
      <tr>
      <td>{item.id}</td>
      <td>{item.price}</td>
      <td>{item.title}</td>
      <td>{item.category}</td>
      <td><button>Editar</button>
      <button>Eiminar</button></td>
      <button>VerProducto</button>
      </tr>
      </>
      ))}
    </tbody>
   </table>
    </>
  )
}

export default App
