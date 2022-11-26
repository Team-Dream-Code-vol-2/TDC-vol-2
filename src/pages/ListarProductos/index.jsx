import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { TarjetaProducto } from '../../components/productos/TarjetaProducto';
import { Button } from '../../components/Button';
import {
    fetchAll, allProducts,
} from './../../features/product'

import './style.css';

export function ListarProductos({ rol }) {
    const navigate = useNavigate();
    const products = useSelector(allProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch]);

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
                {products.map(product =>
                    <TarjetaProducto
                        key={product._id}
                        producto={product}
                        mostrarBotonCompra={rol !== "admin"}
                        mostrarBottonEliminar={rol === "admin"}
                        mostrarBotonEditar={rol === "admin"} />
                )}
            </div>
        </div>
    )
}

export default ListarProductos
