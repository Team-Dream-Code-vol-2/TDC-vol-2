import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { productos } from '../../assets/data/products';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Campo } from '../../components/Campo';

import './style.css';

export function EditarProducto() {
    const { id: productoId } = useParams();
    const navigate = useNavigate();

    const producto = productos.find(({ id }) => id === parseInt(productoId, 10)) || {}
    const title = Object.keys(producto).length > 0 ? 'Editar ' : 'Crear ';

    const handleGuardar = () => navigate('/productos')

    return (
        <div className='editar'>
            <h1>{title} producto</h1>
            <form className="editar-producto" method='POST' action='/'>
                <Campo
                    label="Nombre"
                    name="title">
                    <Input
                        name="title"
                        type="text"
                        value={producto.title || ''}
                        placeholder="Nombre del producto"/>
                </Campo>
                <Campo
                    label="Imagen"
                    name="image">
                    <Input
                        name="image"
                        type="text"
                        value={producto.image || ''}
                        placeholder="Imagen del producto"/>
                </Campo>
                <Campo
                    label="Descripción"
                    name="description">
                    <Input
                        name="description"
                        type="text"
                        value={producto.description || ''}
                        placeholder="Descripción del producto"/>
                </Campo>
                <Campo
                    label="Categoría"
                    name="category">
                    <Input
                        name="category"
                        type="text"
                        value={producto.category || ''}
                        placeholder="Categoría del producto"/>
                </Campo>
                <Campo
                    label="Precio"
                    name="price">
                    <Input
                        name="price"
                        type="number"
                        value={producto.price || 0}
                        placeholder="Precio del producto"/>
                </Campo>
                <Button tipo="btn-primario" onClick={handleGuardar}>Guardar</Button>
            </form>
        </div>
    )
}

export default EditarProducto
