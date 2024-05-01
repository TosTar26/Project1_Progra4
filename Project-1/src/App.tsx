import Products from './Components/Products'
import './Styles/Table.css'
import './App.css'
import MyProvider from './Context/MyContextProvider'
import { Route, Routes } from 'react-router-dom'
import ViewProducts from './Components/ViewProducts'

function App() {
 
  return (
    <>
  <MyProvider>
   <Routes>
    <Route path='/' element={<Products/>}/>
    <Route path='/ViewProduct' element={<ViewProducts/>}/>
   </Routes>
   </MyProvider>
    </>
  )
}

export default App
