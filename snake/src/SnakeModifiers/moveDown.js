export default function moveDown(snake){

    const headMoveDown = {x: snake[0].x, y: snake[0].y + 10}
    snake.unshift(headMoveDown);
    snake.pop();

    return snake;
}