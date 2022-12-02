import {ADD_POINT} from "./snakeActions";

const initialState = {
    score: 0
}

export default function snakeReducer(state = initialState, {type}) {
    switch (type) {
        case ADD_POINT:
            console.log("Dispatching")
            return {
                score: state.score + 1
            }
        default:
            return state;
    }
}