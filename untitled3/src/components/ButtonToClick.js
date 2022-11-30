import React from "react";

function ButtonToClick({click}) {

    function onClick(x) {
        if (typeof click === "function") {
            click(x);
        }
    }

    return(
        <>
            <button onClick={event => onClick(-1)}>Klik</button>
            <button onClick={event => onClick(1)}>Klik</button>
        </>
    )
}

export default ButtonToClick;