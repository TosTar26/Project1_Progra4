import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../Hooks/UseProducts';
import useFunctions from '../Hooks/useFunctions';
import useFilterByName from '../Hooks/useFilter';

const Products = () => {
                   /* <input
                        type="text"
                        placeholder="Buscar por nombre"
                        value={filterByName}
                        onChange={handleNameFilterChange}
                    />
            <div className="filter-container">
                </div>*/
        const pageSize = 22;
    const { getPageData, error, loading } = useProducts(pageSize);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { VerProducto, handleNameFilterChange, filterByName, filterProductsByName} = useFunctions();

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const pageData = getPageData(currentPage);

    return (
        <>
        <div className='container'>

            {error && <h1>Error</h1>}
            {loading && <h1>Loading...</h1>}
            <div className='container-pag'>
                <button className='btn-agregar'><Link to='/AddProduct'>Agregar Producto</Link> <img className='crear-img
                ' src='./src/assets/Crear.png'></img></button>
            <div className="filter-container">
                    <input className='inp-filter'
                        type="text"
                        placeholder="Buscar por nombre"
                        value={filterByName}
                        onChange={handleNameFilterChange}
                    />
                </div>
                
            </div>

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
                    {pageData?.map((item: any) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.price}</td>
                            <td>{item.title}</td>
                            <td>{item.category.name}</td>
                            <td className='column-actions'>
                                <Link className='btn-view' to='/ViewProduct' onClick={() => VerProducto(item.id)}>Ver Producto <img className='eliminar-img' src='./src/assets/leer.png'></img></Link>
                                <Link className='btn-view' to='/EditProduct' onClick={() => VerProducto(item.id)}>Editar <img className='editar-img' src='./src/assets/editar.png'></img></Link>
                                <Link className='btn-view' to='/EliminarProduct' onClick={() => VerProducto(item.id)}>Eliminar <img className='eliminar-img' src='./src/assets/eliminar.png'></img></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='container-buttons'>
                {[1, 2, 3, 4].map((page) => (
                    <button key={page} onClick={() => handlePageChange(page)}>
                         {page}
                    </button>
                ))}
            </div>
        </div>
        </>
    );
}

export default Products;
