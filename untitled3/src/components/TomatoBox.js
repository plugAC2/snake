import React, {useState, useEffect} from "react";
import {clear} from "@testing-library/user-event/dist/clear";

function TomatoBox() {
    const [colorState, setColorState] = useState("cornflowerblue");

    useEffect(() => {
        const interval = setInterval(() => {
            setColorState("tomato")
        }, 2000)
        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <div style={{
            width:"100px",
            height:"100px",
            backgroundColor: colorState
        }}>

        </div>
    )
}

export default TomatoBox;