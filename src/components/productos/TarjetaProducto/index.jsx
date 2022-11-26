import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { Button } from './../../Button'
import { fetchAll, removeProduct } from '../../../features/product';
import { addProductToCart, fetchLastCart } from '../../../features/cart';

import './style.css';

export function TarjetaProducto({
    producto: product,
    mostrarBotonCompra,
    mostrarBotonEditar,
    mostrarBottonEliminar
}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEliminar = () => {
        dispatch(removeProduct(product))
            .then(() => dispatch(fetchAll()))
            .then(() => navigate('/productos'));
    };

    const handleEditar = () => navigate(`/productos/${product._id}/editar`);

    const handleComprar = () => {
        dispatch(addProductToCart(product, 1))
            .then(() => fetchLastCart())
            .then(() => navigate('/carrito'));
    }
    const handleVer = () => navigate(`/productos/${product._id}`)

    return (
        <div className="producto">
            <div className="" onClick={handleVer}>
                <img src={product.image} alt={product.name} />
            </div>
            <div className="">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price} COP</p>
                <div className="acciones">
                    {mostrarBotonCompra && <Button tipo="btn-primario" onClick={handleComprar}>Comprar</Button>}
                    {mostrarBotonEditar && <Button tipo="btn-primario" onClick={handleEditar}>Editar</Button>}
                    {mostrarBottonEliminar && <Button tipo="btn-primario" onClick={handleEliminar}>Eliminar</Button>}
                </div>
            </div>
        </div>
    )
}

export default TarjetaProducto
