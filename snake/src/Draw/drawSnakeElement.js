import {size} from "../Data/elementSize";

export default function drawSnakeElement(context, element) {
    context.fillStyle = "lightgreen";
    context.strokeStyle = "green";
    context.fillRect(element.x, element.y, size, size);
    context.strokeRect(element.x, element.y, size, size);
}