import {size} from "./elementSize";

export default function newElement() {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * Math.floor(500 / size));
    }
    const x = getRandomNumber() * size;
    const y = getRandomNumber() * size;

    return {
        x: x,
        y: y
    }
}