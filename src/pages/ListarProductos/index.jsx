import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TarjetaProducto } from '../../components/productos/TarjetaProducto';
import { Button } from '../../components/Button';
import { productos } from '../../assets/data/products';

import './style.css';

export function ListarProductos({ rol }) {
    const navigate = useNavigate();
    const handleCrear = () => navigate('/productos/crear')
    return (
        <div>
            <div className="titulo">
                <h1>Listar Productos</h1>
                <div className="titulo-btn">
                    <Button tipo="btn-primario" onClick={handleCrear}>Crear</Button>
                </div>
            </div>
            <div className="lista-productos">
                {productos.map(producto => 
                    <TarjetaProducto 
                        producto={producto} 
                        mostrarBotonCompra={rol !== "admin"}
                        mostrarBotonEditar={rol === "admin"} />
                )}
            </div>
        </div>
    )
}

export default ListarProductos
