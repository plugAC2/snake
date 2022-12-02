export default function newElement() {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * Math.floor(50));
    }
    const x = getRandomNumber(50) * 10;
    const y = getRandomNumber(50) * 10;

    return {
        x: x,
        y: y
    }
}