import clearCanvas from "./clearCanvas";
import drawSnake from "./drawSnake";
import drawElement from "./drawElement";
import newElement from "../Data/newElement";

export default function main(context, snake) {

    clearCanvas();
    drawSnake(context, snake)


}