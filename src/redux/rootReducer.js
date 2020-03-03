import { combineReducers } from "redux";
import listReducer from "./list/reducers";

const appReducer = combineReducers({ list: listReducer });

export default appReducer;