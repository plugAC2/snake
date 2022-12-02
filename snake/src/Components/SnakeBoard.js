import React, {useCallback, useEffect, useRef, useState} from "react";
import {boardStyle} from "../Data/canvasSettings";
import main from "../Draw/main";
import Buttons from "./Buttons";
import moveRight from "../SnakeModifiers/moveRight";
import moveLeft from "../SnakeModifiers/moveLeft";
import clearCanvas from "../Draw/clearCanvas";
import snake from "../Data/snakeInit";
import moveUp from "../SnakeModifiers/moveUp";
import moveDown from "../SnakeModifiers/moveDown";
import {height, width} from "../Data/boardDimensions";
import drawElement from "../Draw/drawElement";
import newElement from "../Data/newElement";

export default function SnakeBoard(props) {

    const canvasReference = useRef(null);
    const [snakeState, setSnakeState] = useState(snake);
    const [direction, setDirection] = useState("right");


    const handleMoveRight = () => {
        setSnakeState(() => {
            return [...moveRight(snakeState)]
        });
        setDirection("right");
    }

    const handleMoveLeft = () => {
        setSnakeState(() => {
            return [...moveLeft(snakeState)]
        });
        setDirection("left");
    }

    const handleMoveUp = () => {
        setSnakeState(() => {
            return [...moveUp(snakeState, direction)]
        });
        setDirection("up");
    }

    const handleMoveDown = ()  => {
        setSnakeState(() => {
            return [...moveDown(snakeState)]
        });
        setDirection("down")
    }

    const handleKeyPress = (event) => {
        event.preventDefault();
        console.log(event.key);
        switch (event.key) {
            case "ArrowRight" :
                setSnakeState(() => {
                    return [...moveRight(snakeState)]
                });
                setDirection("right");
                return event;
            case "ArrowLeft" :
                setSnakeState(() => {
                    return [...moveLeft(snakeState)]
                });
                setDirection("left");
                return event;
            case "ArrowUp" :
                setSnakeState(() => {
                    return [...moveUp(snakeState, direction)]
                });
                setDirection("up");
                return event;
            case "ArrowDown" :
                setSnakeState(() => {
                    return [...moveDown(snakeState)]
                });
                setDirection("down")
                return event;
            default:
                return null;
        }
    }

    useEffect(() => {
        const canvas = canvasReference.current;
        const context = canvas.getContext("2d");
        clearCanvas(context, canvas)
        main(context, snakeState);

        // setInterval(() => {
        //     clearCanvas(context, canvas)
        //     if (snakeState === null) {
        //         console.log("GAME OVER")
        //     }
        //     main(context, snakeState);
        //     }, 500)


    }, [snakeState])


    return <div>
        <input onKeyDown={event => handleKeyPress(event)}/>
        <canvas id="board" ref={canvasReference} width={width} height={height} style={boardStyle} {...props}/>
        <Buttons moveRight={handleMoveRight} moveLeft={handleMoveLeft} moveUp={handleMoveUp} moveDown={handleMoveDown}/>
    </div>
}