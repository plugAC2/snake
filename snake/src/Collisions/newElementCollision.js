export const flagNewElement = [false];

export default function newElementCollision(head, newElement) {
    let collides = false;
    if (newElement !== undefined) {
        if (head.x === newElement.x && head.y === newElement.y) {
            collides = true;
            flagNewElement[0] = true;
        }
    }
    return collides;
}