import * as React from "react";
import { Media, Player, controls } from "react-media-player";
import "../css/SpeechPlayer.css";

const { PlayPause, SeekBar, CurrentTime, Duration } = controls;

class SpeechPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playPauseStyle: "sp-button-play"
        }

        this.audioRef = React.createRef();
        this.mediaRef = React.createRef();

        this.interval = null;
    }

    render() {
        return <div className="card">
            <div className="card-block">
                <div className="row justify-content-center mt-1">
                    <Media ref={this.mediaRef}>
                        <div className="media w-100">
                            <Player src="audio.wav" ref={this.audioRef} onPause={this.onPause} onPlay={this.onPlay}/>
                            <div className="col-xl-1 .col-lg-1.col-md-1 .col-sm-1 col-1">
                                <div className="mt-1 ml-3" onClick={this.onClick}>
                                    <PlayPause className={this.state.playPauseStyle} />
                                </div>
                            </div>
                            <div className="col-xl-9 .col-lg-9.col-md-9 .col-sm-9 col-8 w-100">
                                <SeekBar />
                            </div>
                            <div className="col-xl-2 .col-lg-2 .col-md-2 .col-sm-2 .col-3">
                                <p className="mt-2 ml-2 text-nowrap text-muted mw-100 text-center"><small><CurrentTime />/<Duration /></small></p>
                            </div>
                        </div>
                    </Media>
                </div>
            </div>
        </div>
    }

    onPlay = () => {
        this.interval = setInterval(() => this.props.onTimeUpdate(this.audioRef.current.instance.currentTime), 100);
    }

    onPause = () =>  {
        clearInterval(this.interval);
    }
    
    onClick = () => {
        this.setState({ playPauseStyle: this.state.playPauseStyle === "sp-button-play" ? "sp-button-pause" : "sp-button-play" });        
    }
}

export default SpeechPlayer;
