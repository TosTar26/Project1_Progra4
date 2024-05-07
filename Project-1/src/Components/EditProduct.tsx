import React from 'react';
import useEditProduct from '../Hooks/useEditProducts';
import { useNavigate } from 'react-router-dom';
import useFunctions from '../Hooks/useFunctions';


const EditProductForm: React.FC<Products> = ({ initialProduct }) => {
    const { updateData, loading, error } = useEditProduct();
    const navigate = useNavigate();
    const { formData, handleChange, handleSubmit, Navigate } = useFunctions(initialProduct, updateData, navigate);

    return (
        <div>
            <h2>Editar Producto</h2>
            {loading && <div>Cargando...</div>}
            {error && <div>Error:</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre del Producto:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
                <label>
                    Precio:
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </label>
                <label>
                    Categoria:
                    <input type="text" name="category" value={formData.category} onChange={handleChange} />
                </label>
                <label>
                    Descripcion:
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>
                <button type="submit">Guardar Cambios</button>
                <button onClick={Navigate}>Cancelar</button>
            </form>
        </div>
    );
};

export default EditProductForm;
