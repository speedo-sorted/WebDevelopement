import React, { Component } from "react";

class App extends Component {
  reRender = () => {
    // force update
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h2>Random Number Generator</h2>
        <p>Your Number: {Math.floor(Math.random() * 10) + 1}</p>
        <button onClick={this.reRender}>Generate!</button>
      </div>
    );
  }
}

export default App;
