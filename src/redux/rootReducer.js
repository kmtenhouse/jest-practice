import { combineReducers } from "redux";
import surveyReducer from "./reducers/surveyReducers";

const appReducer = combineReducers({ survey: surveyReducer });

export default appReducer;