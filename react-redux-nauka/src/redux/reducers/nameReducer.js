import {ADD_NAME, CURRENT_NAME} from "../actions/nameListActions";

const initialState = {names: ["Jan", "Agnieszka"]};

function nameReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NAME:
            const returner = [...state.names]
            returner.push(action.payload)

            console.log(returner)
            return {
                ...state,
                names: returner
    }
        case CURRENT_NAME:
            return {
                ...state,
                currentName: action.payload
            }
        default:
            return state;
    }
}

export default nameReducer;