import React, { Component } from 'react';
import Board from './Components/Board'
import styled from 'styled-components'
import './App.css';

const StyledApp = styled.div`
  background: #6441A5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Board />
      </StyledApp>
    );
  }
}

export default App;
