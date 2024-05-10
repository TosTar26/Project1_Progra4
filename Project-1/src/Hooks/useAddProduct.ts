import { useState } from 'react';
import { createProduct } from '../Services/ProductService';

const useAddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
  
    const fetchCreateProduct = async (product:any) => {
      setIsLoading(true);
      try {
        const response = await createProduct(product);
        setData(response.data);
      } catch {
        setError(error);
      }
      setIsLoading(false);
    };
  
    return { fetchCreateProduct, isLoading, error, data };
  };


export default useAddProduct;
