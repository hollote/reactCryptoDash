import React, { Component } from 'react';

import './App.css';
import { AppProvider } from './AppProvider';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import Settings from '../Settings'
import Dashboard from '../Dashboard'
import Content from '../Shared/Content';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Content>
            <Settings/>
            <Dashboard/>
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
