import React, { Component } from 'react';

import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import WelcomeMessage from './WelcomeMessage';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar/>
        <WelcomeMessage/>
      </AppLayout>
    );
  }
}

export default App;
