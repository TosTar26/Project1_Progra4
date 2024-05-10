import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDleteProduct from '../Hooks/useDeleteProducts';
import useFunctions from '../Hooks/useFunctions';

const DeleteProduct: React.FC<Products> = () => {
    const {handleDelete} = useFunctions()
    const navigate = useNavigate();

    return (
        <div>
            <div className='button-container'>
                <button type="submit">Guardar Cambios</button>
                <button onClick={handleDelete}>Eliminar Producto</button>
                <button onClick={() => navigate('/')}>Cancelar</button>
            </div>
        </div>
    );
};

export default DeleteProduct;
