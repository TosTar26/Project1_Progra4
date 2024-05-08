import  { useContext, useState } from 'react'
import MyContext from '../Context/MyContext'

const useFunctions = (initialProduct: Products, updateData: Function, navigate: Function,) => {
const {setProductId} = useContext(MyContext);

const VerProducto = (productId : number) => {
setProductId(productId);
}

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

 

 return {
    VerProducto, handleSubmit, handleChange, formData, Navigate
 }
}

export default useFunctions