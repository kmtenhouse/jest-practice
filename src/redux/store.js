import { createStore, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import appReducer from "./rootReducer";

const logger = createLogger({collapsed: true});
const store = createStore(appReducer, applyMiddleware(logger));

export default store;