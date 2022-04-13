import React from 'react';
import Part from "./Part";

function Content(props) {
    const part = props.course.parts;
    const name = part.map((item => item.name));
    const exercises = part.map((item => item.exercises));

    return (
        <div>
            <Part part={name[0]} exercises={exercises[0]} />
            <Part part={name[1]} exercises={exercises[1]} />
            <Part part={name[2]} exercises={exercises[2]} />
        </div>
    );
}

export default Content;