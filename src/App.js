import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([])
    const copy = [...points]

    const pointsAnecdote = () => {
        anecdotes.map((currElement, index) => {
            if (anecdotes[selected] === currElement) {
                setPoints(points.concat(index))

                copy[index] += 1
            }
        });
    }


    /* Test */
    // const fullVersionOfCopy = points.reduce((acc, value) => ({
    //     ...acc,
    //     [value]: (acc[value] || 0) + 1
    // }), {})

    const ranks = copy.reduce(function(totals, num) {
        if (!totals[num]) totals[num] = 0;
        totals[num]++;

        return totals;
    }, {});

    let max = 0;
    Object.keys(ranks).forEach(function(num) {
        if (ranks[num] > max) {
            max = num;
        }
    });

    const randomAnecdote = () => {
        selected: setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <button onClick={pointsAnecdote}>vote</button>
            <button onClick={randomAnecdote} >next anecdote</button>

            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[max]}</p>
        </div>
    )
}

export default App