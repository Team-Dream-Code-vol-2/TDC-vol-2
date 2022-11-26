import React from 'react';

import './style.css'

export const Input = React.forwardRef((props, ref) => {
    return <input {...props} ref={ref}/>
});

export default Input