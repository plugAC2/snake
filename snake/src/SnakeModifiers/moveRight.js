import bodyCollision from "../Collisions/bodyCollision";
import wallCollision from "../Collisions/wallCollision";
import newElementCollision from "../Collisions/newElementCollision";
import {size} from "../Data/elementSize";

export default function moveRight(snake, element) {

    const snakeHeadNewPosition = {x: snake[0].x + size, y: snake[0].y}
    snake.unshift(snakeHeadNewPosition);
    snake.pop();

    if (newElementCollision(snake[0], element)) {
        snake.push({x: snake[snake.length - 1].x + size, y: snake[snake.length - 1].y});
        return snake;
    } else if (bodyCollision(snake, snake[0])) {
        return null;
    } else if (wallCollision(snake[0])) {
        return null;
    }else {
        return snake;
    }
}