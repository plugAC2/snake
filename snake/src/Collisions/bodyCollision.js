import {collisionWallAndBodyFlag} from "../Data/collisionWallAndBodyFlag";


export const flagBodyCollision = [false];

export default function bodyCollision(snake, head) {
    let collides = false;

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            collides = true;
            collisionWallAndBodyFlag[0] = true;
        }
    }
    return collides;
}