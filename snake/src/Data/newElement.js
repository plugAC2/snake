export default function newElement() {
    const max = Math.floor(50);
    const getRandomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    return {
        x: getRandomNumber(49*10),
        y: getRandomNumber(49*10)
    }
}