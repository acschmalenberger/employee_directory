import React from 'react';

import './App.css';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import Search from "./components/Search"
import Table from "./components/Table"
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Search />
        <Table />  
      </Wrapper>      
    </div>
  );
}

export default App;
