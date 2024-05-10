import { useContext, useState } from "react";
import MyContext from "../Context/MyContext";

const useDleteProduct = () => {
    const { productId } = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const deleteData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete data');
            }

            setLoading(false);
            return true; // Opcional: Puedes retornar algo aquí si lo necesitas
        } catch {
            setError(error);
            setLoading(false);
            return false; // Opcional: Puedes manejar el error aquí o retornar algo diferente
        }
    };

    return {
        deleteData, // Agrega la función de eliminación
        loading,
        error,
    };
};

export default useDleteProduct;
