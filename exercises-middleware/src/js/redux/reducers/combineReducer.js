import quoteReducer from "./quoteReducer";
import {combineReducers} from "redux";

export default function() {
    return combineReducers(quoteReducer);
}