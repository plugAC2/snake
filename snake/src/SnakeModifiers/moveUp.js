export default function moveUp(snake, direction){
    let changeX = 0;

    if (direction === "right") {
        changeX = 10;
    } else if (direction === "left") {
        changeX = -10;
    }
    const headMoveUp = {x: snake[0].x, y: snake[0].y - 10}
    snake.unshift(headMoveUp);
    snake.pop();
    for (let i = 1; i < snake.length ; i++) {

    }

    return snake;
}