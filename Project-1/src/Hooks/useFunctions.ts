import  { useContext } from 'react'
import MyContext from '../Context/MyContext'

const useFunctions = () => {

const {setProductId} = useContext(MyContext);

const VerProducto = (productId : number) => {
setProductId(productId);
}


  return {
    VerProducto
  }
}

export default useFunctions