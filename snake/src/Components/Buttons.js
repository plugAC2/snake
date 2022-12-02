import React from "react";


export default function Buttons({moveRight, moveLeft, moveUp, moveDown}) {
    return (
        <div>
            <button onClick={() => moveRight()}>Right</button>
            <button onClick={() => moveLeft()}>Left</button>
            <button onClick={() => moveUp()}>Up</button>
            <button onClick={() => moveDown()}>Down</button>
        </div>
    )
}