import {height, width} from "../Data/boardDimensions";
import {collisionWallAndBodyFlag} from "../Data/collisionWallAndBodyFlag";


export default function wallCollision(head) {

    let collides = false;

    if ((head.x < 0 || head.x > width - 25) || (head.y < 0 || head.y > height - 25)) {
        collides = true;
        collisionWallAndBodyFlag[0] = true;
    }

    return collides;
}