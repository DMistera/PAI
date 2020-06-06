import React from 'react';
import './App.css';

import StoryText from './StoryText/StoryText';
import Options from './Options/Options';
import data from './story.json';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      node: this.findNode("start"),
      flags: []
    }

    this.continue = this.continue.bind(this);
    this.setNode = this.setNode.bind(this);
    this.setFlag = this.setFlag.bind(this);
    this.removeFlag = this.removeFlag.bind(this);
    this.checkFlag = this.checkFlag.bind(this);
  }

  setNode(id) {
    const nextNode = this.findNode(id);
    if(nextNode.set) {
      nextNode.set.forEach(flag => {
        this.setFlag(flag);
      })
    }
    this.setState(prev => {
      prev.node = nextNode;
      if(id === "start") {
        prev.flags = [];
      }
      return prev;
    })
  }

  findNode(id) {
    return data.find(node => {
      return node.id === id && this.checkConditions(node);
    });
  }

  checkConditions(node) {
    if(node.conditions) {
      return !node.conditions.some(condition =>  {
        if(!this.checkFlag(condition)) {
          return true;
        }
        return false;
      })
    }
    return true;
  }

  setFlag(flag) {
    if(!this.checkFlag(flag)) {
      const nextFlags = this.state.flags.concat([flag]);
      this.setState(prev => {
        prev.flags = nextFlags;
        return prev;
      });
    }
  }

  removeFlag(flag) {
    var copy = [...this.state.flags]; // make a separate copy of the array
    var index = copy.indexOf(flag);
    copy.splice(index, 1);
    this.setState(prev => {
      prev.flags = copy;
      return prev;
    });
  }

  checkFlag(flag) {
    return this.state.flags.find(f => {return f === flag}) != null;
  }

  continue() {
    if(this.state.node.next) {
      this.setNode(this.state.node.next);
    }
    else {
      console.error("Next index not found!");
    }
  }

  render() {
    return (
      <main>
        <h2>Labirynt RPG</h2>
        <StoryText text={this.state.node.text} />
        <Options options={this.state.node.options} onContinue={this.continue} onNext={this.setNode} onSetFlag={this.setFlag} onRemoveFlag={this.removeFlag} checkFlag={this.checkFlag}></Options>
      </main>
    );
  }
}

export default App;
