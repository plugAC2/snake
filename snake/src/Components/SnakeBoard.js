import React, {useEffect, useRef, useState} from "react";
import {boardStyle} from "../Data/canvasSettings";
import mainDraw from "../Draw/mainDraw";
import clearCanvas from "../Draw/clearCanvas";
import snake from "../Data/snakeInit";
import {height, width} from "../Data/boardDimensions";
import move from "../SnakeModifiers/move";
import drawElement from "../Draw/drawElement";
import newElement from "../Data/newElement";
import {flagNewElement} from "../Collisions/newElementCollision";
import {useDispatch, useSelector} from "react-redux";
import {addPoint, reset, start} from "../Redux/snakeActions";
import {collisionWallAndBodyFlag} from "../Data/collisionWallAndBodyFlag";


let direction = "";

export default function SnakeBoard(props) {
    const dispatch = useDispatch();
    const score = useSelector((state) => state.score);
    const status = useSelector((state) => state.start);

    const canvasReference = useRef(null);
    const [snakeState, setSnakeState] = useState(snake);
    const [element, setElement] = useState(newElement());

    const handleKeyPress = (event) => {
        console.log(event.key);
        dispatch(start(true));
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

    window.addEventListener('keydown', handleKeyPress)

    useEffect(() => {

        if (status) {
            setTimeout(() => {
                const canvas = canvasReference.current;
                const context = canvas.getContext("2d");
                clearCanvas(context, canvas)
                drawElement(context, element);
                mainDraw(context, snakeState);
                try {
                    setSnakeState(() => {
                        return [...move(snakeState, direction, element)]
                    });
                } catch (error) {
                    console.log(error)
                }

                if (flagNewElement[0]) {
                    setElement(newElement);
                    dispatch(addPoint())
                    flagNewElement[0] = false;
                }

                if (collisionWallAndBodyFlag[0]) {
                    dispatch(start(false));
                    dispatch(reset());
                    collisionWallAndBodyFlag[0] = false;
                }

            }, 200)
        }


    }, [dispatch, element, snakeState, status])


    return <div>
        <h1> Your score: {score}</h1>
        {status && <button onClick={() => dispatch(start(false))}>PAUSE</button>}
        <canvas id="board" ref={canvasReference} width={width} height={height} style={boardStyle} {...props}/>
    </div>
}