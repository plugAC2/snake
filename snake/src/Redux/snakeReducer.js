import {ADD_SNAKES_ELEMENT, MOVE_LEFT, MOVE_RIGHT} from "./snakeActions";

const initialState = {
    snake: [{x:250, y:250}, {x:240, y:250}, {x:230, y:250}, {x:220, y:250}]
}

export default function snakeReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_SNAKES_ELEMENT:
            let longerSnake = state.snake;
            longerSnake.push({x: payload.x, y: payload.y})
            return {
                snake: longerSnake
            }
        case MOVE_RIGHT:
            let rightSnake = state.snake;
            rightSnake.map(el => {
                return {
                    x: el.x+10,
                    y: el.y
                }
            })
            return {
                snake: rightSnake
            }
        case MOVE_LEFT:
            let leftSnake = state.snake;
            leftSnake.map(el => {
                return {
                    x: el.x-10,
                    y: el.y
                }
            })
            return {
                snake: leftSnake
            }
        default:
            return {...state};
    }
}