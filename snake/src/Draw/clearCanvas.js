export default function clearCanvas(context, canvas) {
    if (context !== undefined || canvas !== undefined) {
        context.clearRect(0, 0, canvas.width, canvas.height )
    }
}