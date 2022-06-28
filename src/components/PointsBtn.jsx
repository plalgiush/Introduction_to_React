import React from 'react';

const PointsBtn = ({ text, anecdotes, points, selected, setPoints }) => {
    const pointsAnecdote = () => {
        anecdotes.map((currElement, index) => {
            if (anecdotes[selected] === currElement) {
                setPoints(points.concat(index))
            }
        });
    }

    return (
        <button onClick={pointsAnecdote}>{text}</button>
    )
};

export default PointsBtn;