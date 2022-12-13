import {size} from "../Data/elementSize";

export default function drawApple(context, element) {
    const img = document.getElementById('apple');
    context.drawImage(img, element.x, element.y, size, size)
}