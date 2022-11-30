import React, {useState, useEffect} from "react";

function Bulb() {

    const [light, setLight] = useState("On")
    const [color, setColor] = useState("white")

    const handleClick = (e) => {
        setColor(() => {
            return e;
        })
        setLight(() => {
            return "Off"
        })
    }

    useEffect(() => {

    });

    return(
        <div  style={{backgroundColor:color, width:"100px", height:"100px"}}>
            <button onClick={e => handleClick("yellow")}>{light}</button>
        </div>
    )
}

export default Bulb;