import bodyCollision from "../Collisions/bodyCollision";
import wallCollision from "../Collisions/wallCollision";
import newElementCollision from "../Collisions/newElementCollision";
import {size} from "../Data/elementSize";
import snakeInit from "../Data/snakeInit";
import {direction} from "../Components/SnakeBoard";

export default function moveDown(snake, element){

    const headMoveDown = {x: snake[0].x, y: snake[0].y + size}
    snake.unshift(headMoveDown);
    snake.pop();

    if (newElementCollision(snake[0], element)) {
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y - size});
        return snake;
    } else if (bodyCollision(snake, snake[0])) {
        return snakeInit;
    } else if (wallCollision(snake[0])) {
        return snakeInit;
    } else {
        return snake;
    }
}