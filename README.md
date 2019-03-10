# react-context-sample

# 1) First we will make a new context 

E.g. 

const MyContext = React.createContext();


# 2) Second we will create a context provider and pass in the value

E.g. 

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

# 3) In the component you want to pass the value to, write the providers and inside write a function to pass in the value to be displayed. 

E.g. 

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
