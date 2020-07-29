import React, { Component } from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes'

class App extends Component{
  render(){
    return(
      <div className="container"> 
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;