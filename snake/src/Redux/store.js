import {applyMiddleware, createStore} from "redux";
import snakeReducer from "./snakeReducer";
import thunk from "redux-thunk";


const store = createStore(snakeReducer, applyMiddleware(thunk))

export default store;