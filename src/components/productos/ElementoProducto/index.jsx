import React from 'react';

import './style.css';

export function ElementoCarrito(props) {
    const producto = props.producto

    return (
        <div className="elemento-producto">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>{producto.amount}</p>
            <p>{producto.price} USD</p>
            <p>{producto.price * producto.amount} USD</p>
        </div>
    )
}

export default ElementoCarrito
