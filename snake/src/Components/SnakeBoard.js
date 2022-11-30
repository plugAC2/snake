import React, {useEffect, useRef} from "react";
import {boardStyle} from "../canvasSettings";
import {useSelector} from "react-redux";
import main from "../Draw/main";

export default function SnakeBoard() {

    const board = "board";
    const Canvas = props => {
        const snake = useSelector(state => state.snake);
        const canvasReference = useRef(null);
    useEffect(() =>{
        const canvas = canvasReference.current;
        const context = canvas.getContext("2d");
        main(context, snake);
    }, [snake])
        return <canvas id={board} ref={canvasReference} width="500" height="500" style={boardStyle} {...props}/>
    }

    return <Canvas/>

}