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
  }

  setNode(id) {
    this.setState(prev => {
      prev.node = this.findNode(id);
      if(id === "start") {
        prev.flags = [];
      }
      return prev;
    })
    console.log(this.state.flags);
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
        <Options options={this.state.node.options} onContinue={this.continue} onNext={this.setNode} onSetFlag={this.setFlag}></Options>
      </main>
    );
  }
}

export default App;
