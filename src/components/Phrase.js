import React from "react";
import Word from "./Word";
import userpng from "../img/user.png"

class Phrase extends React.Component {
    render() {
        return <li className="media mt-3">
            <img className="mr-3 rounded-circle" src={userpng} width="32" height="32" alt=""/>
            <div className="media-body">
                <div className="mt-0 mb-1 text-muted">{this.props.phrase.timeStart}</div>
                {this.props.phrase.words.map((word, index) => {
                    return <Word key={index} word={word.word} isActive={word.isActive} />
                })
            }   
            </div>
        </li>
    }
}


export default Phrase;