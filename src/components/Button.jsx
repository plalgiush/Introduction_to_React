import React from 'react';

const Button = (props) => {

    console.log(props.value)
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGood} text='good'>good</button>
            <button onClick={handleNeutral} text='neutral'>neutral</button>
            <button onClick={handleBad} text='bad'>bad</button>
        </div>
    );
};

export default Button;