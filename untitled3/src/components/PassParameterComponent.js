import React from "react";

function PassParameterComponent() {

    const handleClickButton = (text, event) => {
        event.preventDefault();
        console.log(text)
    }

    return (
        <>
            <a onClick={e => handleClickButton("Wypisz ten tekst w konsoli",e)} href="#">CLICK ME</a>
        </>
    )
}

export default PassParameterComponent;