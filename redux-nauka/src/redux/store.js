import numberReducer from "./reducers/numberReducer";

function createStore(reducerFunction, initialState) {
    let currentState = initialState;
    let listeners = [];

    return {
        dispatch(action) {
            currentState = reducerFunction(currentState, action);
            listeners.forEach(listenerFunction => listenerFunction());
        },
        getState() {return currentState},
        subscribe(listener) {
            listeners.push(listener);
            return listeners.filter(currentListener => currentListener !== listener);
        }
    };
}

export const store = createStore(numberReducer, 0);