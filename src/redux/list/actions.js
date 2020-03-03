import * as Actions from "./constants";

export function setAnswer(questionID, answer) {
    return {
        type: Actions.LIST_SET_ANSWER,
        questionID, 
        answer,
        payload: {
            questionID, answer
        }
    };
}

