import React from 'react'
import Task from '../Task/Task';

class ToDoList extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        let tasks = this.props.tasks.reduce((accumulator, task, index) => {
            if(!this.props.filter || !task.checked) {
                accumulator.push(
                    <Task key={index} name={task.name} checked={task.checked} id={index} onCheck={this.props.onCheck} onUncheck={this.props.onUncheck}/>
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