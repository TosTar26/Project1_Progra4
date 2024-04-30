import UseProducts from '../Hooks/UseProducts'

const Products = () => {
    const {error, data, loading} = UseProducts()
  return (
    <>
     {error && <h1>Error</h1>}
            {loading && <h1>Is loading...</h1>}
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
                    {data?.map((item:any) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.price}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td className='column-actions'>
                                <button type='button'>Ver Producto</button>
                                <button type='button' >Eliminar</button>
                                <button type='button'> Modificar </button>

                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </>
  )
}

export default Products