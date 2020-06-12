import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';
import EvenComponent from './Components/MyComponent';
import OddComponent from './Components/MyComponent';

class App extends React.Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "",
      myHeader: < MyComponent />
    };
    this.whatToSay = '';
  }

  onPushMe = () => {
    this.counter++;
    console.log(this.counter, "You pushed this button");
    this.setState({ myState: 'now:' + this.counter });
    ((this.counter % 2) > 0) ? this.setState({ myHeader: <OddComponent /> }) : this.setState({ myHeader: <EvenComponent /> });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.myHeader}
          <h2>I am in control of this application and my name is Sean {this.state.myState}</h2>
          <button onClick={this.onPushMe}>Push Me</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyComponent
            whatToSay='What Ever you Want'
            push={this.onPushMe}
          />
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      </div>
    );
  }
}


export default App;
