import surveyReducer from "./surveyReducers";

describe("Survey reducer", () => {
    let defaultState;

    beforeAll(() => {
        defaultState = {
            name: null,
            quest: null,
            color: null
        };
    });

    it("should provide the correct default state", () => {
        expect(surveyReducer(undefined, {})).toEqual(defaultState);
    });

    it("should update name", ()=> {
        const desiredOutcome =  {
            name: "King Arthur",
            quest: null,
            color: null
        };

        expect(surveyReducer(defaultState, { type: "SURVEY_CHOOSE_NAME", payload: "King Arthur"})).toEqual(desiredOutcome);
    });

    it("should update quest", ()=> {
        const desiredOutcome =  {
            name:  null,
            quest: "To seek the grail",
            color: null
        };

        expect(surveyReducer(defaultState, { type: "SURVEY_CHOOSE_QUEST", payload: "To seek the grail"})).toEqual(desiredOutcome);
    });

    it("should update color", ()=> {
        const desiredOutcome =  {
            name: null,
            quest: null,
            color: "Purple"
        };

        expect(surveyReducer(defaultState, { type: "SURVEY_CHOOSE_COLOR", payload: "Purple"})).toEqual(desiredOutcome);
    });

});