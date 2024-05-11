import React, { useState } from 'react';
import useCreateProduct from './useCreateProduct';
import useAddProduct from '../Hooks/useAddProduct';
import { useNavigate } from 'react-router-dom';
import useFunctions from '../Hooks/useFunctions';

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    description: '',
    categoryId: 1,
    images: ['https://placeimg.com/640/480/any'],
  });
  const {Navigate} = useFunctions()

  const { createProduct, isLoading, error } = useAddProduct();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para enviar los datos del formulario al hook de creación de producto
    await createProduct(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'categoryId' ? parseInt(value) : value
    });
  };

  return (
    <div className="Form-container">
            <h2>Agregar Producto</h2>
            <form onSubmit={handleSubmit} className="form">
                <label>Nombre del Producto</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title"
              />
                
                <label>Precio</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
               
                <label>Descripcion</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            
                <label>Categoria ID</label>
                <input type="number" name="categoryId" value={formData.categoryId} onChange={handleChange} placeholder="Category ID" />
               
                
                {isLoading && <p className="loading">Creating product...</p>}
                {error && <p className="error">Error: {error}</p>}
                <div className="button-container">
                    <button type="submit" className="submit-button">Crear Producto</button>
                    {/* Agregué un botón para cancelar */}
                    <button type="button" onClick={Navigate} className="btn-Cancel">Cancelar</button>
                </div>
            </form>
        </div>
  );
};

export default AddProduct;