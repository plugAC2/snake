import bodyCollision from "../Collisions/bodyCollision";
import wallCollision from "../Collisions/wallCollision";

export default function moveUp(snake){

    const headMoveUp = {x: snake[0].x, y: snake[0].y - 10}
    snake.unshift(headMoveUp);

    if (bodyCollision(snake, snake[0])) {
        return null;
    }

    if (wallCollision(snake[0])) {
        return null;
    }

    snake.pop();

    return snake;
}