import React, {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    function handlePlusButton() {
        setCounter(prevState => prevState + 1);
    }

    function handleMinusButton(){
        setCounter(prevState => prevState - 1);
    }

    function handleResetButton(){
        setCounter(0);
    }

    return (
        <div>
            <h2>Liczba kliknięć {counter}</h2>
            <button onClick={handlePlusButton}>+</button>
            <button onClick={handleMinusButton}>-</button>
            <button onClick={handleResetButton}>Reset</button>
        </div>
    )
}

export default Counter;