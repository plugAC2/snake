import React from "react";

export default function Points({score}) {

    const style = {
        position: "absolute",
        left: "100px",
        top: "150px"
    }

    return <h1 style={style}> Your score: {score}</h1>
}