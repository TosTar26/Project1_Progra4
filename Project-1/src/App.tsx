import Products from './Components/Products'
import './Styles/Table.css'
import './App.css'
import MyProvider from './Context/MyContextProvider'
import { Route, Routes } from 'react-router-dom'
import ViewProducts from './Components/ViewProducts'
import EditProduct from './Components/EditProduct'
import './Styles/Form.css'
import DeleteProduct from './Components/DeleteProduct'
import AddProduct from './Components/AddProduct'

function App() {
 
  return (
    <>
  <MyProvider>
   <Routes>
    <Route path='/' element={<Products/>}/>
    <Route path='/ViewProduct' element={<ViewProducts/>}/>
    <Route path='/EditProduct' element={<EditProduct/>}/>
    <Route path='/EliminarProduct' element={<DeleteProduct/>}/>
    <Route path='/AddProduct' element={<AddProduct/>}/>
   </Routes>
   </MyProvider>
    </>
  )
}

export default App
