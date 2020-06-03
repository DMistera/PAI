import React from 'react';

class NewTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <div>
                <input type="text" id="new-task" value={this.state.value} onChange={this.handleChange}></input>
                <input type="button" value="Add" onClick={this.handleSubmit}></input>
            </div>
        )
    }

}

export default NewTask;