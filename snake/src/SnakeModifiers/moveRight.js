import bodyCollision from "../Collisions/bodyCollision";
import wallCollision from "../Collisions/wallCollision";

export default function moveRight(snake) {

    const snakeHeadNewPosition = {x: snake[0].x + 10, y: snake[0].y}
    snake.unshift(snakeHeadNewPosition);

    if (bodyCollision(snake, snake[0])) {
        return null;
    }

    if (wallCollision(snake[0])) {
        return null;
    }

    snake.pop();

    return snake;
}