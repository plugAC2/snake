import drawSnakeElement from "./drawSnakeElement";

export default function drawSnake(context, snake) {
    snake.forEach(element => drawSnakeElement(context, element))
}