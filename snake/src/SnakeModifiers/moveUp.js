import bodyCollision from "../Collisions/bodyCollision";
import wallCollision from "../Collisions/wallCollision";
import newElementCollision from "../Collisions/newElementCollision";
import {size} from "../Data/elementSize";
import snakeInit from "../Data/snakeInit";

export default function moveUp(snake, element){

    const headMoveUp = {x: snake[0].x, y: snake[0].y - size}
    snake.unshift(headMoveUp);
    snake.pop();

    if (newElementCollision(snake[0], element)) {
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y + size});
        return snake;
    } else if (bodyCollision(snake, snake[0])) {
        return snakeInit;
    } else if (wallCollision(snake[0])) {
        return snakeInit;
    } else {
        return snake;
    }
}