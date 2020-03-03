import * as Actions from "./constants";

const defaultState = {

};

export default function listReducer(state = defaultState, action) {
    let newState;
    switch (action.type) {
        case Actions.LIST_SET_ANSWER:
            newState = {
                ...state,
                [action.questionID]: action.answer
            }
                break;
        default: newState = state;
    }
    return newState;
}