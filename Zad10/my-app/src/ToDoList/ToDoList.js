import React from 'react'
import Task from '../Task/Task';

class ToDoList extends React.Component {

    constructor(props) {
        super(props);

        this.handleCheck = this.handleCheck.bind(this);
        this.handleUncheck = this.handleUncheck.bind(this);
    }

    handleCheck(index) {
        this.props.onCheck(index);
    }

    handleUncheck(index) {
        this.props.onUncheck(index);
    }

    render() {
        let tasks = this.props.tasks.reduce((accumulator, task, index) => {
            if(!this.props.filter || !task.checked) {
                accumulator.push(
                    <Task key={index} name={task.name} checked={task.checked} id={index} onCheck={this.handleCheck} onUncheck={this.handleUncheck}/>
                )
            }
            return accumulator;
        }, []);
        
        return (
            tasks
        )
    }
}

export default ToDoList;