import React from 'react';

import { ElementoVenta } from '../../components/ventas/ElementoVenta';
import { ventas } from '../../assets/data/ventas';

import './style.css';

export function ListarVentas({ rol }) {
    return (
        <div>
            <h1>Listar ventas</h1>
            <div className="lista-ventas">
                <div className="encabezado">
                    <p>ID</p>
                    <p>Fecha</p>
                    <p>Precio</p>
                </div>
                {ventas.map(venta => 
                    <ElementoVenta venta={venta} key={venta.id}>Venta</ElementoVenta>
                )}
            </div>
        </div>
    )
}

export default ListarVentas
