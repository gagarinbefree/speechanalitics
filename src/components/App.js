import * as React from "react";
import "../css/App.css";
import Phrase from "./Phrase";
import SpeechPlayer from "./SpeechPlayer";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    render() {
        return <React.Fragment><div className="row mt-3">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <div className="card">
                    <div className="card-body">
                        <li className="media mt-3">
                            <div className="media-body">
                                <h5>Пример звонка audio.wav</h5>
                                <small className="text-muted">21 Мар 18:03:41</small>
                                <hr />
                            </div>
                        </li>
                        <ul className="list-unstyled">
                            {this.props.transcript.map((item, index) => {
                                    return <Phrase key={index} phrase={item} currentTime={this.props.currentTime} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
            <div className="row mt-3">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <SpeechPlayer onTimeUpdate={this.onTimeUpdate} />
                </div>
                <div className="col-sm-3"></div>
            </div>
        </React.Fragment>
    }


    async componentDidMount() {
        await this.props.getTranscriptAsync();
    }

    onTimeUpdate = (currentTime) => this.props.setCurrentTime(currentTime);
}

export default App;



