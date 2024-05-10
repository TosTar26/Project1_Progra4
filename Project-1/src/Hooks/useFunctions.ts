import  { useContext, useState } from 'react'
import MyContext from '../Context/MyContext'
import useDleteProduct from './useDeleteProducts';
import { useNavigate } from 'react-router-dom';

const useFunctions = (initialProduct: Products, updateData: Function,) => {
const {setProductId} = useContext(MyContext);
const {deleteData} = useDleteProduct()
const navigate = useNavigate()

const Navigate = () => {
  navigate('/')
}

  const [formData, setFormData] = useState<Products>(initialProduct || { title: "", price: 0, category: "", description: "", images: ""});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
          await updateData(formData);
          console.log('Producto actualizado correctamente');
          navigate('/');
      } catch (error) {
          console.error('Error al actualizar el producto:', error);
      }
  };

  const VerProducto = (productId : number) => {
    setProductId(productId);
    }

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            try {
                await deleteData();
                console.log('Producto eliminado correctamente');
                navigate('/');
            } catch (error) {
                console.error('Error al eliminar el producto:', error);
            }
        }
    };

 return {
    VerProducto, handleSubmit, handleChange, formData, Navigate, handleDelete
 }
}

export default useFunctions