import { useState } from "react";
import {logDOM} from "@testing-library/react";

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
        all: setAll(all.concat(0))
        neutral: setNeutral(neutral + 1)
    }

    const handleBad = () => {
        all: setAll(all.concat(-1))
        bad: setBad(bad + 1)
        average: setAverage(average.concat(-1))
    }

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGood} text='good'>good</button>
            <button onClick={handleNeutral} text='neutral'>neutral</button>
            <button onClick={handleBad} text='bad'>bad</button>

            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all.length}</p>
            <p>average {average.reduce(function() { return (good - bad) / all.length }, 0)}</p>
            <p>positive {(good * 100) / all.length} %</p>
        </div>
    )
}

export default App;