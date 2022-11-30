import React from "react";

export const PresentationalComponent = ({value, handleIncrease, handleDecrease}) => {
    return (
        <div>
            <h4>{value}</h4>
            <button onClick={event => handleIncrease(event)}>+</button>
            <button onClick={event => handleDecrease(event)}>-</button>
        </div>
    )
}