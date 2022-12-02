import bodyCollision from "../Collisions/bodyCollision";
import wallCollision from "../Collisions/wallCollision";

export default function moveDown(snake){
    console.log("Going down")
    const headMoveDown = {x: snake[0].x, y: snake[0].y + 10}
    snake.unshift(headMoveDown);
    snake.pop();
    if (bodyCollision(snake, snake[0])) {
        return null;
    } else if (wallCollision(snake[0])) {
        return null;
    }else{
        return snake;
    }
}