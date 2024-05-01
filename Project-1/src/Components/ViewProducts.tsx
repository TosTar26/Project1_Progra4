import useViewProducts from '../Hooks/useViewProducts'
import { Link } from 'react-router-dom'

const ViewProducts = () => {
    const {product, loading, error} = useViewProducts()

  return (
   <>
    {loading && <h1>Loading...</h1>}
            {error && <h1>ERROR</h1>}
            <div>
                <table className='table-container'>
                    <thead>
                        <tr className='header-columns'>
                            <th>Id</th>
                            <th>Precio</th>
                            <th>Nombre Producto</th>
                            <th>Categoría</th>
                            <th>Descripción</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product?.id}</td>
                            <td>{product?.price}</td>
                            <td>{product?.title}</td>
                            <td>{product?.category}</td>
                            <td>{product?.description}</td>
                            <td>{product?.rating?.rate}</td>
                            <td>{product?.rating?.count}</td>
                            <td className='column-imagen'>
                                <img src={product?.image}style={{ width: '100px', height: 'auto' }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button><Link to='/'>Main Page</Link></button>
   </>
  )
}

export default ViewProducts