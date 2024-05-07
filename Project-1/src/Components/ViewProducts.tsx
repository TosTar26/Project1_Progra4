import React from 'react';
import useViewProducts from '../Hooks/useViewProducts';
import { Link } from 'react-router-dom';

const ViewProducts = () => {
    const { product, loading, error } = useViewProducts();

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>ERROR</h1>}
            {product && (
                <div>
                    <table className='table-container'>
                        <thead>
                            <tr className='header-columns'>
                                <th>Id</th>
                                <th>Precio</th>
                                <th>Nombre Producto</th>
                                <th>Categoría</th>
                                <th>Descripción</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.price}</td>
                                <td>{product.title}</td>
                                <td>{product.category?.name}</td>
                                <td>{product.description}</td>
                                <td className='column-imagen'>
                                    {product.images && product.images.map((imageUrl, index) => (
                                        <img key={index} src={imageUrl} alt={`Product Image ${index + 1}`} style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            <button><Link to='/'>Main Page</Link></button>
        </>
    );
}

export default ViewProducts;
