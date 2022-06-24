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
            <StatisticLine value={props.good} text={'good'}/>
            <StatisticLine value={props.neutral} text={'neutral'}/>
            <StatisticLine value={props.bad} text={'bad'}/>
            <StatisticLine value={props.all} text={'all'}/>
            <StatisticLine value={props.average} text={'average'}/>
            <StatisticLine value={props.positive} text={'positive'}/>
        </div>
    );
};

export default Statistics;