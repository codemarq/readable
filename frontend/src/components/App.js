import React, { Component } from 'react';
import Header from './common/Header'
import HomePage from './home/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
