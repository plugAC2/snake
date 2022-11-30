import {ADD_PRODUCT, CHANGE_ORDER} from "./actions/shopListActions";

const initialState = {
    products: []
}

function shopListReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT:
            const productsBeingPushed = [...state.products];
            productsBeingPushed.push({
                id: action.payload.id,
                name: action.payload.name,
                quantity: action.payload.quantity
            });
            return {
                ...state,
                products: productsBeingPushed
            };
        case CHANGE_ORDER:
            return state
        default:
            return state;
    }
}

export default shopListReducer;