import * as React from "react";
import { Media, Player, controls } from "react-media-player";

const { PlayPause, SeekBar, CurrentTime, Duration } = controls;

class SpeechPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playPauseStyle: "sp-button-play"
        }

        this.audioRef = React.createRef();
        this.mediaRef = React.createRef();
        this.buttonRef = React.createRef();
    }

    render() {
        return <div className="card">
            <div className="card-block">
                <div className="row justify-content-center mt-1">
                    <Media ref={this.mediaRef}>
                        <div className="media w-100">
                            <Player src="audio.wav" ref={this.audioRef} />
                            <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3" ref={this.buttonRef}>
                                <div className="mt-1 ml-3">
                                    <PlayPause className={this.state.playPauseStyle} />
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 col-6 w-100">
                                <SeekBar />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-2">
                                <p className="mt-2 ml-2 text-nowrap text-muted mw-100 text-center"><small><CurrentTime />/<Duration /></small></p>
                            </div>
                        </div>
                    </Media>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        this.buttonRef.current.addEventListener("click", this.onClick, false);
        this.interval = setInterval(() => this.props.onTimeUpdate(this.audioRef.current.instance.currentTime), 100);
    }
   
    onClick = () => {
        this.setState({ playPauseStyle: this.state.playPauseStyle === "sp-button-play" ? "sp-button-pause" : "sp-button-play" });        
    }
}

export default SpeechPlayer;
