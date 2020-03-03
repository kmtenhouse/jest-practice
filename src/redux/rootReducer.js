import { combineReducers } from "redux";
import surveyReducer from "./survey/reducers/surveyReducers";

const appReducer = combineReducers({ survey: surveyReducer });

export default appReducer;