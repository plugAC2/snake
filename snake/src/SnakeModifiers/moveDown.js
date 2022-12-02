import bodyCollision from "../Collisions/bodyCollision";
import wallCollision from "../Collisions/wallCollision";
import newElementCollision from "../Collisions/newElementCollision";

export default function moveDown(snake, element){

    const headMoveDown = {x: snake[0].x, y: snake[0].y + 10}
    snake.unshift(headMoveDown);
    snake.pop();

    if (newElementCollision(snake[0], element)) {
        snake.push({x: snake[snake.length -1].x, y: snake[snake.length -1].y -10});
        return snake;
    } else if (bodyCollision(snake, snake[0])) {
        return null;
    } else if (wallCollision(snake[0])) {
        return null;
    } else {
        return snake;
    }
}