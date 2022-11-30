import {ADD_SNAKES_ELEMENT} from "./snakeActions";

const initialState = {
    snake: [{x:250, y:250}, {x:240, y:250}, {x:230, y:250}, {x:220, y:250}]
}

export default function snakeReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_SNAKES_ELEMENT:
            const longerSnake = state.snake.push({x: payload.x, y: payload.y})
            return {
                snake: longerSnake
            }
        default:
            return {...state};
    }
}