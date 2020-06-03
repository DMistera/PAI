import React from 'react';
import styles from './Task.css';

class Task extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        if(event.target.checked) {
            this.props.onCheck(this.props.id);
        }
        else {
            this.props.onUncheck(this.props.id);
        }
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.checked} id={this.props.id} onChange={this.handleClick}></input>
                <label htmlFor={this.props.id} className={(this.props.checked ? 'crossed' : '')}>{this.props.name}</label>
            </div>
        )
    }
}

export default Task;