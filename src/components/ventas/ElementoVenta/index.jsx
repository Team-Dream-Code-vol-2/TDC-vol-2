import React from 'react';

import './style.css';

export function ElementoVenta(props) {
    const venta = props.venta

    return (
        <div className="elemento-venta">
            <p>{venta.id}</p>
            <p>{venta.fecha}</p>
            <p>{venta.precio} USD</p>
        </div>
    )
}

export default ElementoVenta
