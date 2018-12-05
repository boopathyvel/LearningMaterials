import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';

class App extends Component {
  state = {
    todos:[
      {id:1, content:'buy some milk'},
      {id:2, content:'play mario kart'}
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="horizontal-border"></div>
        <div className="content-area">
          <div className="vertical-border"></div>
          <div className="content">
            <h1 className="center blue-text">Todo's</h1>
          </div>
        </div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
