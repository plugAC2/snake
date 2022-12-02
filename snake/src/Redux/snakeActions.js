export const ADD_SNAKES_ELEMENT = "ADD_SNAKE_ELEMENT";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN"

const addSnakesElement = (cords) => {
    return {
        type: ADD_SNAKES_ELEMENT,
        payload: cords
    }
}

const moveLeft = cords => {
    return {
        type: MOVE_LEFT,
    }
}

const moveRight = cords => {
    return {
        type: MOVE_RIGHT,
    }
}

const moveUp = cords => {
    return {
        type: MOVE_UP,
    }
}

const moveDown = cords => {
    return {
        type: MOVE_DOWN,
    }
}



export function addNewSnakesElement(snakeCords) {
    return (dispatch) => {
        setInterval(() => {
            dispatch(addSnakesElement(snakeCords));
        }, 1000)

    }
}