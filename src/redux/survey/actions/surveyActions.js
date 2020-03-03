import * as Actions from "../constants/surveyConstants";

export function chooseName(name) {
    return {
        type: Actions.SURVEY_CHOOSE_NAME,
        payload: name
    };
}

export function chooseQuest(quest) {
    return {
        type: Actions.SURVEY_CHOOSE_QUEST,
        payload: quest
    };
}

export function chooseColor(color) {
    return {
        type: Actions.SURVEY_CHOOSE_COLOR,
        payload: color
    };
}