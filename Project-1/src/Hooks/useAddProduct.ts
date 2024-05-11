import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate()

  const createProduct = async (productData: any) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      setIsLoading(false);
      setError(null);
      navigate('/')
      return await response.json();
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return { createProduct, isLoading, error };
};

export default useAddProduct;