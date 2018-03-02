import React, { Component } from 'react'
import Header from './common/Header'
import routes from '../routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          {routes}
        </div>
        <div id="#response-container">
        </div>
      </div>
    );
  }
}

export default App;
