const DECREASE = "INCREASE";

function decrease() {
    return {
        type: DECREASE,
        payload: -1
    }
}

export default DECREASE;