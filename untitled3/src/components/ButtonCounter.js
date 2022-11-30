import React, {useState} from "react";
import ButtonToClick from "./ButtonToClick";

function ButtonCounter() {

    const [counter, setCounter] = useState(0)

    function handleButtonClick(x) {
        setCounter(prevState => prevState + x);
    }

    return(
        <div>
            <h1>{counter}</h1>
            <ButtonToClick click={handleButtonClick}/>
        </div>
    )
}

export default ButtonCounter;