import {size} from "../Data/elementSize";
import {direction} from "../Components/SnakeBoard";

export default function drawHead(context, element) {

    const imgRight = document.getElementById('head_right');

    console.log(direction)
    switch (direction) {
        case "RIGHT":
            context.drawImage(imgRight, element.x, element.y, size, size)
            break;
        case "LEFT":
            const imgLeft = document.getElementById('head_left');
            context.drawImage(imgLeft, element.x, element.y, size, size)
            break;
        case "UP":
            const imgUp = document.getElementById('head_up');
            context.drawImage(imgUp, element.x, element.y, size, size)
            break;
        case "DOWN":
            const imgDown = document.getElementById('head_down');
            context.drawImage(imgDown, element.x, element.y, size, size)
            break;
        default:
            context.drawImage(imgRight, element.x, element.y, size, size)
    }


}