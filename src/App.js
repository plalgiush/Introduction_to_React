import { useState } from "react";
import button from "./Components/Button";
import {logDOM} from "@testing-library/react";

const History = (props) => {
  if (props.allClicks.length === 0) {
      return (
          <div>
              the app is used by pressing thr buttons
          </div>
      )
  }
  return (
      <div>
          button press history: {props.allClicks.join(' ')}
      </div>
  )
}

const Button = ( {handleClick, text} ) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const [value, setValue] = useState(10)

    const setToValue = (newValue) => () => {
        console.log(newValue)
        setValue(newValue)
    }

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text='left' />
            <Button handleClick={handleRightClick} text='right' />
            {right}
            <History allClicks={allClicks} />

            {value}
            <button onClick={setToValue(1000)}>thousand</button>
            <button onClick={setToValue(0)}>zero</button>
            <button onClick={setToValue(value + 1)}>increment</button>
        </div>
    )
}

export default App;