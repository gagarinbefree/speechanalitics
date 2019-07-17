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
            draft.payload.transcript.map((phrase) =>  {
                for (let ii = 0; ii < phrase.words.length; ii++) {
                    let word = phrase.words[ii];
                    let isActive = action.currentTime >= word.timeStart && action.currentTime <= word.timeEnd;
                    word.isActive = isActive;

                    /*if (isActive && typeof word.isActive === "undefined") {           
                        word.isActive = true;
                        if (ii > 0) {
                            phrase.words[ii - 1].isFaded = true;
                        }
                    }*/

                    //word.isActive = isActive;

                    //if(ii > 0 )
                    //    phrase.words[ii - 1].isActive = false;

                    /*if (isActive && ii === 0) {
                        word.isActive = true;
                    }
                    else if (isActive && typeof phrase.words[ii - 1].isActive === "undefined") {
                        phrase.words[ii - 1].isActive = true;
                    }    
                    else if (isActive && typeof phrase.words[ii - 1].isActive !== "undefined") {
                        word.isActive = true;
                        if(ii > 0 )
                            phrase.words[ii - 1].isActive = false;
                    }*/
                }                     

                /*let word = phrase.words.find(word => action.currentTime >= word.timeStart && action.currentTime <= word.timeEnd)
                if (typeof word !== "undefined") {
                    if (typeof word.isActive === "undefined") {
                        word.isActive = true;                       
                        console.log(word.word);
                    }                    
                }*/
                return phrase;
            });
        }
    });
}

export default AppReducer;