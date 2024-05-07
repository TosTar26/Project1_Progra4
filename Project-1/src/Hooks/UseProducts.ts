import  { useEffect, useState } from 'react'

const UseProducts = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false);
    const [loading ,setLoading] = useState(false);

 useEffect(() => {
fetching()
 },[])
const fetching = async () => {
    try{
        setLoading(true);
        const respuesta = await fetch('https://api.escuelajs.co/api/v1/products')
        const datos = await respuesta.json()
        setData(datos);
    } catch{
setError(error);
console.log("Error");
    }
    finally{
        setLoading(false)
    }
}

  return {
data, error, loading
  }
}
export default UseProducts