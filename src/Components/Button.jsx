import React from 'react';

const Button = ( {onClick, text} ) => (
    <button onClick={onClick}>
        {text}
    </button>
)

export default Button;