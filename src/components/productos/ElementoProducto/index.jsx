import React from 'react';

import './style.css';

export function ElementoCarrito({ price, units, product}) {

    return (
        <div className="elemento-producto">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{units}</p>
            <p>{price} USD</p>
            <p>{price * units} COP</p>
        </div>
    )
}

export default ElementoCarrito
