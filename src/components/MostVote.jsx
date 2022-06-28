import React from 'react';

const MostVote = ({ anecdotes, points}) => {
    const max = points.reduce(
        (a, b, i, arr) =>
            (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
        null)

    return (
        <div>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[max]}</p>
        </div>
    );
};

export default MostVote;