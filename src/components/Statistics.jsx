import React from 'react';
import StatisticLine from "./StatisticLine";

const Statistics = (props) => {

    if (props.all === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <h1>statistics</h1>
            <StatisticLine value={props.good}/>
            <StatisticLine value={props.neutral}/>
            <StatisticLine value={props.bad}/>
            <StatisticLine value={props.all}/>
            <StatisticLine value={props.average}/>
            <StatisticLine value={props.positive}/>
        </div>
    );
};

export default Statistics;