import React, { Component } from 'react';
import Ninjas from './Ninjas';
import Ninjaz from './Ninjasfunctionalcomponent';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas:[
      {name:'Singh', age:30, belt:'white',id:1},
      {name:'Singh1', age:301, belt:'white1',id:2},
      {name:'Singh2', age:302, belt:'white2',id:3}
    ]
  }

  addNinja = (ninja) =>{
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja];
    this.setState({
      ninjas : ninjas
    })
  }

  deleteNinja = (id) =>{
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id;
    })
    this.setState({
      ninjas : ninjas
    })
  }
  componentDidMount(){
    console.log('component mounter');
  }

  componentDidUpdate(){
    console.log('component updated');
    //console.log(prevProps,prevState);
  }
  render() {
    return (
      <div className="App">
       <h1>My First React App!</h1>
       <h2>Welcome....!</h2>
       
       <h2>Welcome to Ninjas. state component...!</h2>
       <Ninjas deleteNinja = {this.deleteNinja} ninjas={this.state.ninjas}/>
       <h2>Welcome to Ninjaz. functional component...!</h2>
       <Ninjaz ninjas={this.state.ninjas} deleteNinja = {this.deleteNinja}/>
       <h2>AddNinja...!</h2>
       <AddNinja addNinja = {this.addNinja}/>
      </div>
    );
  }
}

export default App;
