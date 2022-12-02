import {size} from "../Data/elementSize";

export default function drawElement(context, element) {
    context.fillStyle = "lightblue";
    context.strokeStyle = "red";
    context.fillRect(element.x, element.y, size, size);
    context.strokeRect(element.x, element.y, size, size);
}