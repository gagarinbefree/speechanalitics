import produce from "immer";

const initalState = {
    type: "",
    payload: {
        currentTime: 0.0,
        transcript: [],
        error: ""
    }
}

const AppReducer = (state = initalState, action) => {
    return produce(state, (draft) => {
        if (action.type === "APP_GET_TRANSCRIPT") {
            draft.payload.transcript = action.transcript;
        }
        else if (action.type === "APP_SET_CURRENT_TIME") {
            draft.payload.transcript.map(phrase => 
                phrase.words.map(word => 
                    word.isActive = action.currentTime >= word.timeStart && action.currentTime <= word.timeEnd));
        }
    });
}

export default AppReducer;