import {QUOTE_ERROR, QUOTE_FETCHED, QUOTE_FETCHING, ADD_FAV} from "../actions/quoteActions";

const initialState = {
    loading: false,
    error: "",
    quote: "",
    favourites: []
}

function quoteReducer(state = initialState, actions) {
    switch (actions.type) {
        case QUOTE_FETCHING:
            return {
                ...state,
                loading: true
            }
        case QUOTE_FETCHED:
            return {
                ...state,
                loading: false,
                quote: actions.payload
            }
        case QUOTE_ERROR:
            return {
                ...initialState,
                error: actions.payload
            }
        case ADD_FAV:
            return {
                ...state,
                loading: false,
                favourites: [...state.favourites, actions.payload]
            }
        default:
            return state;
    }
}

export default quoteReducer;