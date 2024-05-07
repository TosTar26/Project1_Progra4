import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../Hooks/UseProducts';
import useFunctions from '../Hooks/useFunctions';

const Products = () => {
    const { error, data, loading } = useProducts();
    const { VerProducto } = useFunctions();

    return (
        <>
            {error && <h1>Error</h1>}
            {loading && <h1>Loading...</h1>}
            <button>Agregar Producto</button>
            <table className='table-container'>
                <thead>
                    <tr className='header-columns'>
                        <th>Id</th>
                        <th>Precio</th>
                        <th>Titulo</th>
                        <th>Categoria</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item: any) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.price}</td>
                            <td>{item.title}</td>
                            <td>{item.category.name}</td>
                            <td className='column-actions'>
                                <Link to='/ViewProduct' onClick={() => VerProducto(item.id)}>Ver Producto</Link>
                                <Link to='/EditProduct' onClick={() => VerProducto(item.id)}>Editar</Link>
                                <button type='button'>Modificar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Products;
