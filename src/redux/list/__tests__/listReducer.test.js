import listReducer from "../reducers";
import { setAnswer } from "../actions";

describe("List reducer", () => {
    let defaultState;

    beforeAll(() => {
        defaultState = {};
    });

    it("should have the expected default state", () => {
        expect(listReducer(undefined, {})).toEqual(defaultState);
    });

    it("should add a new answer to the state when available", () => {
        expect(listReducer(defaultState, setAnswer(1, "bar"))).toEqual({
            "1": "bar"
        });
    });

});