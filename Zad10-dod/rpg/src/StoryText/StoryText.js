import React from 'react';
import styles from './StoryText.css'

class StoryText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            originalText: "",
            counter: 0
        };

    }

    componentDidMount() {
        setInterval(() => {
            let nextCounter = this.state.counter + 1;
            let nextText = this.state.originalText;
            if(this.props.text !== this.state.originalText) {
                nextText = this.props.text;
                nextCounter = 0;
            }
            this.setState({
                originalText: nextText,
                counter: nextCounter
            });
        }, 10);
    }

    render() {

        return (
            <span id="story-text">
                {this.state.originalText.slice(0, this.state.counter)}
            </span>
        )
    }
}

export default StoryText;