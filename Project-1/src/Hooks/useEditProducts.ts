import { useContext, useState } from 'react';
import MyContext from '../Context/MyContext';

const useEditProduct = () => {
    const { productId } = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateData = async (updatedData :any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error('Failed to update data');
            }

            const responseData = await response.json();
            setLoading(false);
            return responseData;
        } catch {
            setError(error);
            setLoading(false);
        }
    };

    return {
        updateData,
        loading,
        error,
    };
};

export default useEditProduct;
