import moveRight from "./moveRight";
import moveLeft from "./moveLeft";
import moveUp from "./moveUp";
import moveDown from "./moveDown";

export default function move(snake, direction, element) {

    switch (direction) {
        case "RIGHT" :
            return moveRight(snake, element);
        case "LEFT" :
            return moveLeft(snake, element);
        case "UP" :
            return moveUp(snake, element);
        case "DOWN" :
            return moveDown(snake, element);
        default :
            return snake;
    }

}