export default function newElementCollision(head, newElement) {
    let collides = false;


    if (newElement !== undefined) {
        console.log(head.x)
        console.log(newElement.x)
        if (head.x === newElement.x && head.y === newElement.y) {
            collides = true;
        }
    }
    console.log(collides)

    return collides;
}