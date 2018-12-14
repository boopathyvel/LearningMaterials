import React, { Component } from 'react';
import Store from './data/Store.js';
import MyMessenger from './components/MyMessenger.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      store : new Store(this)
    }
  }
  
  render() {
    return (
      <div className="App">
        <MyMessenger store={this.state.store}></MyMessenger>
      </div>
    );
  }
}

export default App;
