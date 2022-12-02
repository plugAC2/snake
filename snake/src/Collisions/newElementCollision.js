export const flag = [false];

export default function newElementCollision(head, newElement) {
    let collides = false;
    if (newElement !== undefined) {
        if (head.x === newElement.x && head.y === newElement.y) {
            collides = true;
            flag[0] = true;
        }
    }
    return collides;
}