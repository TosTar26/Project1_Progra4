import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../Context/MyContext';

const useViewProducts = () => {
    const { productId } = useContext(MyContext);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState<Products>();
    
    
    const usegetProductsbyid = async () => {
        try{
          setLoading(true);
          const respuesta = await fetch(`https://fakestoreapi.com/products/${productId}`);
          const data = await respuesta.json();
          setProduct(data);
        } catch{
         setError(error);
        }
        finally {
           setLoading(false);
       }
       } 

    useEffect(() => {
      usegetProductsbyid();
    },[productId])

  return{
product, error, loading
  }
}

export default useViewProducts