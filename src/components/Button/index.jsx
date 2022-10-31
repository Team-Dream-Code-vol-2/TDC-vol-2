import React from 'react';

import './style.css'

export function Button(props) {
    const tipo = props.tipo
    const onClick = props.onClick

    return (
        <button type="button" className={tipo} onClick={onClick}>
            {props.children}
        </button>
    )
}

export default Button