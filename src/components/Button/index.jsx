import React from 'react';

import './style.css'

export function Button({ tipo, type = 'button', onClick, ...props}) {
    return (
        <button type={type} className={tipo} onClick={onClick} {...props}>
            {props.children}
        </button>
    )
}

export default Button