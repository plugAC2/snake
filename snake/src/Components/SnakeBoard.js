import React, {useEffect, useRef, useState} from "react";
import {boardStyle} from "../Data/canvasSettings";
import mainDraw from "../Draw/mainDraw";
import clearCanvas from "../Draw/clearCanvas";
import snake from "../Data/snakeInit";
import {height, width} from "../Data/boardDimensions";
import move from "../SnakeModifiers/move";
import drawElement from "../Draw/drawElement";
import newElement from "../Data/newElement";
import {flag} from "../Collisions/newElementCollision";

let direction = "";

export default function SnakeBoard(props) {

    const canvasReference = useRef(null);
    const [snakeState, setSnakeState] = useState(snake);
    const [element, setElement] = useState(newElement());

    const handleKeyPress = (event) => {
        console.log(event.key);
        switch (event.key) {
            case "ArrowRight" :
                direction = "RIGHT";
                break;
            case "ArrowLeft" :
                direction = "LEFT";
                break;
            case "ArrowUp" :
                direction = "UP";
                break;
            case "ArrowDown" :
                direction = "DOWN";
                break;
            default:
                direction = "RIGHT"
        }
    }

    useEffect(() => {
        setTimeout(() => {
            const canvas = canvasReference.current;
            const context = canvas.getContext("2d");
            clearCanvas(context, canvas)
            drawElement(context, element);
            mainDraw(context, snakeState);
            setSnakeState(() => {
                return [...move(snakeState, direction, element)]
            });

            console.log(flag[0])
            if (flag[0]) {
                setElement(newElement);
                flag[0] = false;
            }

        }, 200)


    }, [element, snakeState])


    return <div>
        <input onKeyDown={event => handleKeyPress(event)}/>
        <canvas id="board" ref={canvasReference} width={width} height={height} style={boardStyle} {...props}/>
    </div>
}