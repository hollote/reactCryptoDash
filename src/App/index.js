import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import './App.css';
import WelcomeMessage from './WelcomeMessage';

class App extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage/>
      </div>
    );
  }
}

export default App;
