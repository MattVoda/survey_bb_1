import { PAGE_FORWARD, PAGE_BACKWARD, ADD_Q_RESPONSE } from "../actions/Actions_ALL";

//copied from Main.js props passing
const initialState = {
    surveyStage: 0,
    industry: "",
    employeeCount: "",
    SliderInput1Value: "",
    RadioInput1Value: "",
    questionResponses: {}
}

//question format:
//{ qName: "IndustryPick",
//  value: CAN BE A FEW FORMS (INT, STRING)


export const pageChanged = (state = initialState.surveyStage, action) => {
    switch (action.type) {
        case PAGE_FORWARD:
            //do validation with IF here?
            return state + 1
        case PAGE_BACKWARD:
            //do validation with IF here?
            //eg can't go back on first page
            return state - 1
        default:
            return state
    }
}


export const addQResponse = (state = initialState.questionResponses, action) => {
    switch (action.type) {
        case ADD_Q_RESPONSE:
            //do validation with IF here?
            //return a new array, with current state , plus new response concatenated on end
            return {
                ...state,
                [action.id]: action.answer
            }
        default:
            return state
    }
}