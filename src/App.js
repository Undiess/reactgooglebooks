import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Title from './components/Title';
import SearchBox from "./components/searchbox"

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Title/>
      <SearchBox/>
    </div>
  );
}

export default App;
