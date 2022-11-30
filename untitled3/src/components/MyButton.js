import React, {useState} from "react";

function MyButton() {
    const [buttonState, setButtonState] = useState("NIE");
    function handleButtonYes() {
        setButtonState("YES")
    }
    function handleButtonNo() {
        setButtonState("NO")
    }
    return (
        <div>
            <button onClick={buttonState === "YES" ? handleButtonNo : handleButtonYes}>{buttonState}</button>
            <h1 hidden={buttonState !== "YES" && true}>tes bogiem</h1>
        </div>
    )
}

export default MyButton;