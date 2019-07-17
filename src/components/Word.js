import React from 'react';

class Word extends React.PureComponent {
    render() {
        let style = this.props.isActive ? "active-word" : "";
        return <React.Fragment>
            <span className={style}>{this.props.word} </span>
        </React.Fragment>
    }
}

export default Word;