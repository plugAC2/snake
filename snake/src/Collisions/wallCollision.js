import {height, width} from "../Data/boardDimensions";

export default function wallCollision(head) {

    let collides = false;

    if ((head.x < 0 || head.x > width) || (head.y < 0 || head.y > height)) {
        collides = true;
    }

    return collides;
}