export default function bodyCollision(snake, head) {
    let collides = false;

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            collides = true;
        }
    }
    return collides;
}