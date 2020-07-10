import React from 'react';

import './App.css';

import Header from "./components/Header"
import Body from "./components/Body"
import Container from "./components/Container"




function App() {
  return (
    <div className="App">
      <Header />
      <Container>
          <Body />
      </Container>
  
    </div>
  );
}

export default App;
