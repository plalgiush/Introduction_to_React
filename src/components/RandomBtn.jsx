import React from 'react';

const RandomBtn = ({ text, anecdotes, setSelected }) => {
    const randomAnecdote = () => {
        selected: setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    return  (
        <button onClick={randomAnecdote}>{text}</button>
    )
};

export default RandomBtn;