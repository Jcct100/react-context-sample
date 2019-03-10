import React, { Component } from 'react';
import './App.css';

//First we will make a new context
const MyContext = React.createContext();

//Then create a provider component
class MyProvider extends Component {
  state = {
    name: 'James',
    age: 100,
    cool: true
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div>
    <Person/>
  </div>
)

class Person extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>update age</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
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
      <MyProvider>
        <div className="App">
          <p>My profile is</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
