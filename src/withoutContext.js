import React, { Component } from 'react';
import './App.css';

const Family = (props) => (
  <div>
    <Person name={props.name}/>
  </div>
)

class Person extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

class App extends Component {
  state = {
    name: 'James',
    age: 100,
    cool: true
  }


  render() {
    return (
      <div className="App">
        <p>My name is</p>
        <Family name={this.state.name} />
      </div>
    );
  }
}

export default App;
