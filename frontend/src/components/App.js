import React, { Component } from 'react';
import Header from './common/Header'
import HomePage from './home/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <HomePage/>
      </div>
    );
  }
}

export default App;
