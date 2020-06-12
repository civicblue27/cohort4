import React from 'react';
import logo from './logo.svg';
import SVGicons from './components/ribbon';
import Game from './components/TicTacToe.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picClick: 0
    };
  }

  handleClick = (number) => {
    this.setState({
      picClick: number
    })
  }

  render() {
    return (
      <div className="App">
        <SVGicons handleClick={this.handleClick} />
        {this.state.picClick === 0 && <Game />}
        {this.state.picClick === 1}
        {this.state.picClick === 2}
        {this.state.picClick === 3}
        {this.state.picClick === 4}
        {this.state.picClick === 5}
        <header className="App-Header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
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
