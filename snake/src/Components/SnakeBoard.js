import React, {useEffect, useRef, useState} from "react";
import {boardStyle} from "../Data/canvasSettings";
import main from "../Draw/main";
import Buttons from "./Buttons";
import moveRight from "../SnakeModifiers/moveRight";
import moveLeft from "../SnakeModifiers/moveLeft";
import clearCanvas from "../Draw/clearCanvas";
import snake from "../Data/snakeInit";
import moveUp from "../SnakeModifiers/moveUp";
import moveDown from "../SnakeModifiers/moveDown";

export default function SnakeBoard(props) {

    const canvasReference = useRef(null);
    const [snakeState, setSnakeState] = useState(snake);
    const [direction, setDirection] = useState("right");

    const handleMoveRight = () => {
        setSnakeState(moveRight(snakeState));
        setDirection("right");
    }

    const handleMoveLeft = () => {
        setSnakeState(moveLeft(snakeState));
        setDirection("left");
    }

    const handleMoveUp = () => {
        setSnakeState(moveUp(snakeState, direction));
        setDirection("up");
    }

    const handleMoveDown = ()  => {
        setSnakeState(moveDown(snakeState));
        setDirection("down")
    }

    useEffect(() => {

        setInterval(() => {
            const canvas = canvasReference.current;
            const context = canvas.getContext("2d");
            clearCanvas(context, canvas)
            main(context, snakeState);

            }, 500)
    }, [snakeState])


    return <div>
        <canvas id="board" ref={canvasReference} width="500" height="500" style={boardStyle} {...props}/>
        <Buttons moveRight={handleMoveRight} moveLeft={handleMoveLeft} moveUp={handleMoveUp} moveDown={handleMoveDown}/>
    </div>
}