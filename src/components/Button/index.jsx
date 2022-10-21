import React from 'react';

import './style.css'

export function Button(props) {
    const tipo = props.tipo

    return (
        <button type="button" className={tipo}>
            {props.children}
        </button>
    )
}

export default Button