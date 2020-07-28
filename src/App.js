import React, { Component } from 'react';
import './style.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component{
  render(){
    return(
      <div className="container"> 
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;