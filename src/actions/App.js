export const getTranscript = (transcript, error) => ({
    type: "APP_GET_TRANSCRIPT",
    transcript,
    error
})

export const setCurrentTime = (currentTime) => ({
    type: "APP_SET_CURRENT_TIME",
    currentTime
});

export const getTranscriptAsync = () => (
    async (dispatch) => {
        try {
            const res = await fetch("./transcript.json", {method: "GET"});

            dispatch(getTranscript(await res.json(), ""));
        }
        catch (ex) {
            dispatch(getTranscript([], ex));
        }
    }
)


