import React from 'react';

import TarjetaProducto from './../TarjetaProducto';

import { productos } from './../../../assets/data/products';
import './style.css';

export function ListarProductos() {
    return (
        <div>
            <h1>Listar Productos</h1>
            <div className="lista-productos">
                {productos.map(producto => 
                    <TarjetaProducto 
                        producto={producto} 
                        mostrarBotonCompra={true}/>
                )}
            </div>
        </div>
    )
}

export default ListarProductos
