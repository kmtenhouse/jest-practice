import * as Actions from "../constants/surveyConstants";

const defaultState = {
    name: "",
    quest: "",
    color: ""
};

export default function surveyReducer(state = defaultState, action) {
    let newState;
    switch (action.type) {

        case Actions.SURVEY_CHOOSE_NAME:
            newState = {
                ...state,
                name: action.payload
            };
            break;

        case Actions.SURVEY_CHOOSE_QUEST:
            newState = {
                ...state,
                quest: action.payload
            };
            break;

        case Actions.SURVEY_CHOOSE_COLOR:
            newState = {
                ...state,
                color: action.payload
            };
            break;

        default:
            newState = Object.assign({}, state);
            break;
    }
    return newState;
}