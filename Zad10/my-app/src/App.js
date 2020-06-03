import React from 'react';
import './App.css';
import Filter from './Filter/Filter';
import NewTask from './NewTask/NewTask';
import ToDoList from './ToDoList/ToDoList';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      tasks: [],
      filter: false
    }

    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleUncheck = this.handleUncheck.bind(this);
    this.handleFilterCheck = this.handleFilterCheck.bind(this);
    this.handleFilterUncheck = this.handleFilterUncheck.bind(this);
  }

  handleTaskSubmit(value) {
    this.setState({
      tasks: this.state.tasks.concat([{
        name: value, checked: false 
      }])
    });
  }

  handleCheck(index) {
      this.setState((prevState) => {
        prevState.tasks[index].checked = true;
        return prevState;
      });
  }

  handleUncheck(index) {
    this.setState((prevState) => {
      prevState.tasks[index].checked = false;
      return prevState;
    });
  }

  handleFilterCheck() {
    this.setState((prevState) => {
      prevState.filter = true;
      return prevState;
    });
  }

  handleFilterUncheck() {
    this.setState((prevState) => {
      prevState.filter = false;
      return prevState;
    });
  }

  render() { 
    return (
      <main>
        <h2>Welcome to my To Do List</h2>
        <div id="box">
          <Filter onCheck={this.handleFilterCheck} onUncheck={this.handleFilterUncheck}/>
          <hr/>
          <ToDoList tasks={this.state.tasks} onCheck={this.handleCheck} onUncheck={this.handleUncheck} filter={this.state.filter}/>
          <hr/>
          <NewTask onSubmit={this.handleTaskSubmit}/>
        </div>
      </main>
    );
  }
}

export default App;
