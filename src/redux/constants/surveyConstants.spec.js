import * as Actions from "./surveyConstants";

describe("Survey constants", ()=>{
   it("should have the right values for constants", ()=> {
       expect(Actions.SURVEY_CHOOSE_COLOR).toBe("SURVEY_CHOOSE_COLOR");
       expect(Actions.SURVEY_CHOOSE_QUEST).toBe("SURVEY_CHOOSE_QUEST");
       expect(Actions.SURVEY_CHOOSE_NAME).toBe("SURVEY_CHOOSE_NAME");
   }); 
});