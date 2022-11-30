import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import combineReducer from "./reducers/combineReducer";
import quoteReducer from "./reducers/quoteReducer";

const store = createStore(quoteReducer, applyMiddleware(thunk));

export default store;