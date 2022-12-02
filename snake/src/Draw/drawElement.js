export default function drawElement(context, element) {
    context.fillStyle = "lightblue";
    context.strokeStyle = "red";
    context.fillRect(element.x, element.y, 10, 10);
    context.strokeRect(element.x, element.y, 10, 10);
}