import React from 'react';

import ElementoProducto from './../ElementoProducto';
import Button from './../../Button';

import { productosCarrito } from './../../../assets/data/carrito';
import './style.css';

export function CarritoCompras() {
    return (
        <div>
            <h1>Carrito de compras</h1>
            <div className="lista-productos-carrito">
                <div className="encabezado">
                    <p></p>
                    <p>Producto</p>
                    <p>Cantidad</p>
                    <p>Precio</p>
                    <p>Total</p>
                </div>
                {productosCarrito.map(producto => 
                    <ElementoProducto 
                        producto={producto} />
                )}
            </div>
            <div className="botones-carrito">
                <Button tipo="btn-primario">Finalizar Compra</Button>
                <Button tipo="btn-cancelar">Cancelar</Button>
            </div>
        </div>
    )
}

export default CarritoCompras
