const ADD_PRODUCT = "ADD_PRODUCT";
const CHANGE_ORDER = "CHANGE_ORDER";

function addProduct() {
    return {
        type: ADD_PRODUCT,
        payload: {
            id: 0,
            name: "product's name",
            quantity: 0
        }
    }
}

function changeOrder() {
    return {
        type: CHANGE_ORDER,
        payload: {
            steps: "Value negative or positive to move an object in the array",
            id: "Product id"
        }
    }
}

export {ADD_PRODUCT, CHANGE_ORDER};