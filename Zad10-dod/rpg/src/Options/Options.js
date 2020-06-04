import React from 'react';
import styles from './Options.css'

class Options extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(option) {
        if(option.set) {
            option.set.forEach(flag => {
                this.props.onSetFlag(flag);
            });
        }
        if(option.next) {
            this.props.onNext(option.next);
        }
        else if(option.random) {
            let sum = 0;
            option.random.forEach(r => {
                sum += r.weight;
            });
            let rand = Math.random()*sum;
            sum = 0;
            console.log(rand);
            option.random.some(r => {
                sum += r.weight;
                if(rand < sum) {
                    this.props.onNext(r.next);
                    return true;
                }
                return false;
            });
        }
    }

    render() {
        let items;
        if(this.props.options == null) {
            items = [
                <span className="option" onClick={this.props.onContinue}>Kontynuuj.</span>
            ]
        }
        else {
            items = this.props.options.map((option, index) => {
                return <span key={index} className="option" onClick={() => {this.handleClick(option)}}>{option.text}</span>
            })
        }

        return (
            <div id="options">
                {items}
            </div>
        )
    }
}

export default Options;