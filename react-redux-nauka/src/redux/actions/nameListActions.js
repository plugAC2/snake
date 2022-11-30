const ADD_NAME = "ADD_NAME";
const CURRENT_NAME = "CURRENT_NAME";

function add(name) {
    return {
        type: ADD_NAME,
        payload: name
    }
}

function currentName(name) {
    return {
        type: CURRENT_NAME,
        payload: name
    }
}

export {ADD_NAME, CURRENT_NAME};