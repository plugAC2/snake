const INCREASE = "INCREASE";

function increase() {
    return {
        type: INCREASE,
        payload: 1
    }
}

export default INCREASE;