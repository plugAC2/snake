import drawSnakeElement from "./drawSnakeElement";
import drawHead from "./drawHead";

export default function drawSnake(context, snake) {
    for (let i = 0; i < snake.length; i++) {
        if (i === 0) {
            drawHead(context, snake[i]);
        } else {
            drawSnakeElement(context, snake[i])
        }
    }
}