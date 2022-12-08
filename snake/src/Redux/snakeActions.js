export const ADD_POINT = "ADD_POINT";
export const START = "START"
export const RESET_POINTS = "RESET_POINTS";

export const addPoint = () => {
    return {
        type: ADD_POINT
    }
}

export const start = (payload) => {
    return {
        type: START,
        payload: payload
    }
}

export const reset = () => {
    return {
        type: RESET_POINTS
    }
}