import React, { Component } from 'react';
import Navi from './Nav';
import Body from './Body';
// import HelperText from './HelperText';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navi />
      <Body />
      </div>
    );
  }
}

export default App;
