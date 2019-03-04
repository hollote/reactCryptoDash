import React, { Component } from 'react';

import './App.css';
import { AppProvider } from './AppProvider';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import WelcomeMessage from './WelcomeMessage';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <WelcomeMessage/>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
