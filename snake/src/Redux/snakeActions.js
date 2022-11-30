export const ADD_SNAKES_ELEMENT = "ADD_SNAKE_ELEMENT";

const addSnakesElement = (cords) => {
    return {
        type: ADD_SNAKES_ELEMENT,
        payload: cords
    }
}


export function drawSnake(snakeCords) {
    return (dispatch) => {
        dispatch(addSnakesElement(snakeCords));
    }
}