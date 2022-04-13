import React from 'react';

function Total(props) {
    const parts = props.course.parts;
    const exercise = parts.map((item) => item.exercises);

    return (
        <p>Number of exercises {exercise[0] + exercise[1] + exercise[2]}</p>
    );
}

export default Total;