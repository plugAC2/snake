import React from "react";


export default function Buttons({moveRight, moveLeft, moveUp, moveDown}) {
    return (
        <div>
            <button onClick={(event) => {
                event.preventDefault();
                moveRight();
            }}>Right</button>
            <button onClick={(event) => {
                event.preventDefault();
                moveLeft();
            }}>Left</button>
            <button onClick={(event) => {
                event.preventDefault();
                moveUp();
            }}>Up</button>
            <button onClick={(event) => {
                event.preventDefault();
                moveDown();
            }}>Down</button>
        </div>
    )
}