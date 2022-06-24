import React from 'react';

const StatisticLine = ({value, text}) => {
    return (
        <table><td>{text}</td> <td>{value}</td></table>
    );
};

export default StatisticLine;