import React from 'react';
import { useParams } from 'react-router-dom';

import TarjetaProducto from '../../components/productos/TarjetaProducto';
import { productos } from '../../assets/data/products';

import './style.css';

export function VerProducto({ rol }) {
    const { id: productoId } = useParams();

    const producto = productos.find(({ id }) => id === parseInt(productoId, 10))
    return (
        <div className="ver-producto">
            {
                producto && <TarjetaProducto 
                    producto={producto} 
                    mostrarBotonCompra={rol !== "admin"}
                    mostrarBotonEditar={rol === "admin"} />
            }
        </div>
    )
}

export default VerProducto
