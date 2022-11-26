import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Campo } from '../../components/Campo';
import { useGetProduct } from '../../hooks/useGetProduct';
import { editProduct, fetchAll, saveProduct } from '../../features/product';

import './style.css';

export const EditarProducto = () => {
    const { id: productId } = useParams();
    const dispatch = useDispatch();
    const [product] = useGetProduct(productId);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const title = productId ? 'Editar ' : 'Crear ';

    const edit = async (product) => {
        dispatch(editProduct(productId, product))
            .then(() => dispatch(fetchAll()))
            .then(() => navigate('/productos'));
    }

    const save = async (product) => {
        dispatch(saveProduct(product))
            .then(() => dispatch(fetchAll()))
            .then(() => navigate('/productos'));
    }

    const onSubmit = (product) => {
        const saveFn = (productId) ? edit : save;
        saveFn(product);
    }

    return (
        <div className='editar'>
            <h1>{title} producto</h1>
            <form className="editar-producto" onSubmit={handleSubmit(onSubmit)}>
                <Campo
                    label="Nombre"
                    name="title">
                    <Input
                        type="text"
                        defaultValue={product.name}
                        placeholder="Nombre del producto"
                        {...register("name", { required: true })} />
                </Campo>
                <Campo
                    label="Imagen"
                    name="image">
                    <Input
                        type="text"
                        defaultValue={product.image}
                        placeholder="Imagen del producto"
                        {...register("image", { required: true })} />
                </Campo>
                <Campo
                    label="Descripción"
                    name="description">
                    <Input
                        type="text"
                        defaultValue={product.description}
                        placeholder="Descripción del producto"
                        {...register("description", { required: true })} />
                </Campo>
                <Campo
                    label="Categoría"
                    name="category">
                    <Input
                        type="text"
                        defaultValue={product.category}
                        placeholder="Categoría del producto"
                        {...register("category", { required: true })} />
                </Campo>
                <Campo
                    label="Precio"
                    name="price">
                    <Input
                        type="text"
                        defaultValue={product.price}
                        placeholder="Precio del producto"
                        {...register("price", { required: true })} />
                </Campo>
                <Button tipo="btn-primario" type="submit" onClick={() => handleSubmit(onSubmit)}>Guardar</Button>
            </form>
        </div>
    )
}

export default EditarProducto
