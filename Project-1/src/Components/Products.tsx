import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../Hooks/UseProducts';
import useFunctions from '../Hooks/useFunctions';

const Products = () => {
    const { error, data, loading } = useProducts();
    const { VerProducto } = useFunctions();

    return (
        <>
        <div className='container'>

            {error && <h1>Error</h1>}
            {loading && <h1>Loading...</h1>}
            <button className='btn-agregar'><Link to='/AddProduct'>Agregar Producto</Link> <img className='crear-img
            ' src='./src/assets/Crear.png'></img></button>
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
                                <Link to='/ViewProduct' onClick={() => VerProducto(item.id)}>Ver Producto <img className='eliminar-img' src='./src/assets/leer.png'></img></Link>
                                <Link to='/EditProduct' onClick={() => VerProducto(item.id)}>Editar <img className='editar-img' src='./src/assets/editar.png'></img></Link>
                                <Link to='/EliminarProduct' onClick={() => VerProducto(item.id)}>Eliminar <img className='eliminar-img' src='./src/assets/eliminar.png'></img></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Products;
