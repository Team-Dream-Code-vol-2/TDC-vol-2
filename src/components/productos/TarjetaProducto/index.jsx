import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from './../../Button'

import './style.css';

export function TarjetaProducto({
    producto,
    mostrarBotonCompra,
    mostrarBotonEditar
}) {
    const navigate = useNavigate();

    const handleEditar = () => navigate(`/productos/${producto.id}/editar`)
    const handleComprar = () => navigate(`/carrito`)
    const handleVer = () => navigate(`/productos/${producto.id}`)

    return (
        <div className="producto">
            <div className="" onClick={handleVer}>
                <img src={producto.image} alt={producto.title} />
            </div>
            <div className="">
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
                <p>{producto.price} USD</p>
                {mostrarBotonCompra && <Button tipo="btn-primario" onClick={handleComprar}>Comprar</Button>}
                {mostrarBotonEditar && <Button tipo="btn-primario" onClick={handleEditar}>Editar</Button>}
            </div>
        </div>
    )
}

export default TarjetaProducto
