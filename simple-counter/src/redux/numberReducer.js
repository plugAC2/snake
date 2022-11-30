import INCREASE from "./actions/increase";
import DECREASE from "./actions/decrease";

const initialState = 0;

function numberReducer(state=initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + action.payload;
        case DECREASE:
            return state + action.payload;
        default:
            return state;
    }
}

export default numberReducer;