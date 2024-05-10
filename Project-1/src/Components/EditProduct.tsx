import React from 'react';
import useEditProduct from '../Hooks/useEditProducts';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditProductForm: React.FC<Products> = ({ initialProduct }) => {
    const { updateData, loading, error } = useEditProduct();
    const navigate = useNavigate();
    const { register, handleSubmit, formState : {errors}} = useForm<Products>({ defaultValues: initialProduct });
   
    const onSubmit = async (data: Products) => {
        try {
            await updateData(data);
            console.log('Producto actualizado correctamente');
            navigate('/');
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    return (
        <div>
            {loading && <div>Cargando...</div>}
            {error && <div>Error:</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className='Form-container'>
            <h2>Editar Producto</h2>
            <label>
        Nombre del Producto:
    </label>
    <input type="text" {...register('title', {
        required: {
            value: true,
            message: "Requerido"
        }, 
        minLength: {
            value : 4,
            message: "El nombre de ser de 4 caracteres"
        }
    })} />
    {errors.title && <span>{errors.title.message}</span>}
                
                <label>
                    Precio:
                </label>
                    <input type="number" {...register('price',{
                        required: {
                            value: true,
                            message: "Requerido"
                        }, minLength: {
                            value: 2,
                            message: "El precio debe de ser mayor de 1 digito"
                        }
                    } )} />
                     {errors.price && <span>{errors.price.message}</span>}


                <label>
                    Categoria:
                </label>
                    <input type="text" {...register('category', {
                         required: {
                            value: true,
                            message: "Requerido"
                        }, 
                        minLength: {
                            value : 4,
                            message: "La categoria de ser de 4 caracteres"
                        }
                    })} />
                       {errors.category && <span>{errors.category.message}</span>}


                <label>
                    Descripcion:
                </label>
                    <input type="text" {...register('description', {
                          required: {
                            value: true,
                            message: "Requerido"
                        },
                        minLength : {
                            value: 11 ,
                            message : "La descripcion debe tener mas de 10 caracteres"
                        }, 
                        maxLength :{
                            value : 200,
                            message : "La descripcion no puede ser mayor de 200 caracteres"
                        }
                    })} />
                           {errors.description && <span>{errors.description.message}</span>}
                </div>
                           <div className='button-container'>
                <button type="submit">Guardar Cambios</button>
                <button className='btn-Cancel' onClick={() => navigate('/')}>Cancelar</button>
                           </div>
            </form>
        </div>
    );
};

export default EditProductForm;
