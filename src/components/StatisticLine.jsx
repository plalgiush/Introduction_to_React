import React from 'react';

const StatisticLine = ({value, text}) => {
    return (
        <div>
            <p>{text} {value}</p>
        </div>
    );
};

export default StatisticLine;