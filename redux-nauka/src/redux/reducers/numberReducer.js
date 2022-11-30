import {DECREMENT, INCREMENT} from "../actions/counterActions";

const initialState = 0;

function numberReducer(state = initialState, {type, payload}) {
    switch (type) {
        case INCREMENT:
            return state + payload;
        case DECREMENT:
            return state - payload;
        default:
            return state;
    }
}


export default numberReducer;