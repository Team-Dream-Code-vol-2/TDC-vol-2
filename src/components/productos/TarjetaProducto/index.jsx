import React from 'react';

import { Button } from './../../Button'

import './style.css';

export function TarjetaProducto(props) {
    const producto = props.producto
    const mostrarBotonCompra = props.mostrarBotonCompra

    return (
        <div className="producto">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
            <p>{producto.price} USD</p>
            {mostrarBotonCompra && <Button tipo="btn-primario">Comprar</Button>}
        </div>
    )
}

export default TarjetaProducto
