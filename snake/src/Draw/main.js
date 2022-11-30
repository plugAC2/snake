import clearCanvas from "./clearCanvas";
import drawSnake from "./drawSnake";

export default function main(context, snake) {

    clearCanvas();
    drawSnake(context, snake)
}