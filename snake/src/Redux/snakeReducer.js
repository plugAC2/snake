import {ADD_POINT, RESET_POINTS, START} from "./snakeActions";

const initialState = {
    score: 0,
    start: true
}

export default function snakeReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_POINT:
            console.log("Dispatching")
            return {
                ...state,
                score: state.score + 1
            }
        case START:
            return {
                ...state,
                start: payload
            }
        case RESET_POINTS:
            return {
                ...state,
                score: 0
            }
        default:
            return state;
    }
}