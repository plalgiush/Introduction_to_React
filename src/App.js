import React, { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState([])
    const [average, setAverage] = useState([])

    const handleGood = () => {
        all: setAll(all.concat(1))
        good: setGood(good + 1)
        average: setAverage(average.concat(1))
    }

    const handleNeutral = () => {
        all: setAll(all.concat(1))
        neutral: setNeutral(neutral + 1)
    }

    const handleBad = () => {
        all: setAll(all.concat(1))
        bad: setBad(bad + 1)
        average: setAverage(average.concat(-1))
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => handleGood()} text={'good'}/>
            <Button handleClick={() => handleNeutral()} text={'neutral'}/>
            <Button handleClick={() => handleBad()} text={'bad'}/>

            <Statistics
                good = {good}
                neutral = {neutral}
                bad = {bad}
                all = {all.length}
                average = {average.reduce(function() {return (good - bad) / all.length}, 0)}
                positive = {(good * 100) / all.length}
            />
        </div>
    )
}

export default App;