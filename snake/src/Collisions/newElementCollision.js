export default function newElementCollision(head, newElement) {
    let collides = false;

    if (head.x === newElement.x && head.y === newElement.y) {
        collides = true;
    }

    return collides;
}