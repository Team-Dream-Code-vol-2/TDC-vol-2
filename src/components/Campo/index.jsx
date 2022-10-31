import React from 'react';

import './style.css';

export function Campo({ label, name, children }) {
    return (
        <div className="campo">
            <label htmlFor={name}>{label}</label>
            {children}
        </div>
    )
}

export default Campo
