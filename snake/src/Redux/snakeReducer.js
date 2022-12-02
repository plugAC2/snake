import {RANDOMISE_NEW_ELEMENT} from "./snakeActions";

const initialState = {
    randomise: false
}

export default function snakeReducer(state = initialState, {type}) {
    switch (type) {
        case RANDOMISE_NEW_ELEMENT:
            return {
                ...state,
                randomise: !state.randomise
            }
        default:
            return state;
    }
}