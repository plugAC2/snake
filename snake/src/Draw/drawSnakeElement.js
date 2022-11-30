export default function drawSnakeElement(context, element) {
    context.fillStyle = "lightgreen";
    context.strokeStyle = "green";
    context.fillRect(element.x, element.y, 10, 10);
    context.strokeRect(element.x, element.y, 10, 10);
}