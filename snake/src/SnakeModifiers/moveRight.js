export default function moveRight(snake) {
    console.log(snake)
    const snakeHeadNewPosition = {x: snake[0].x + 10, y: snake[0].y}
    snake.unshift(snakeHeadNewPosition);
    console.log(snake.pop());
    console.log(snake)
    return snake;
}