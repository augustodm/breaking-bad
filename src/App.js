import React, { Component } from 'react';
import './style.css';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="container"> 
          <Header/>
          <Routes/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;