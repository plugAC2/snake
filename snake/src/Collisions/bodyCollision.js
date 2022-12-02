export default function bodyCollision(snake, head) {
    let collides = false;
    console.log(snake)
    console.log(head)

    for (let i = 1; i < snake.length; i++) {
        console.log(snake[i].x)
        console.log(snake[i].y)
        if (snake[i].x === head.x && snake[i].y === head.y) {
            collides = true;
        }
    }
    return collides;
}