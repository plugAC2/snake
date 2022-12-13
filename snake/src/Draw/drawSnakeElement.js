import {size} from "../Data/elementSize";

export default function drawSnakeElement(context, element) {
    const img = document.getElementById('skin');
    context.drawImage(img, element.x, element.y, size, size)
}