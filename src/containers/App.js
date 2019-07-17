import { connect } from "react-redux";
import App from "../components/App";
import { getTranscriptAsync, setCurrentTime } from "../actions/App";

const mapStateToProps = (state) => {
    return {        
        transcript: state.AppReducer.payload.transcript
    }
}

const mapDispatchToProps = (dispatch) => {
    return {  
        getTranscriptAsync: () => dispatch(getTranscriptAsync()),
        setCurrentTime: (currentTime) => dispatch(setCurrentTime(currentTime))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);