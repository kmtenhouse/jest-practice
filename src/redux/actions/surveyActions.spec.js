import { chooseColor, chooseQuest, chooseName } from "./surveyActions";

describe("Survey Action Creators", ()=> {
    it("Should create the right action to update name", ()=>{
        expect(chooseName("Tassa")).toEqual({type: "SURVEY_CHOOSE_NAME", payload: "Tassa"});
    });

    it("Should create the right action to update quest", ()=>{
        expect(chooseQuest("To seek the grail")).toEqual({type: "SURVEY_CHOOSE_QUEST", payload: "To seek the grail"});
    });

    it("Should create the right action to update color", ()=>{
        expect(chooseColor("Red")).toEqual({type: "SURVEY_CHOOSE_COLOR", payload: "Red"});
    });

});