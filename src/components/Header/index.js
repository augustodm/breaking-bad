import React, { Component } from 'react';
import '../../style.css';
import image from '../../imgs/header.png';


class Header extends Component{
  
  click (){
    window.location="http://localhost:3000/";
  }

  render(){
    return(
        <header>
          <button className="homebutton" onClick={()=> this.click()}> Home </button>
          <img src={image} className='logo'/>
        </header>
    );
  }
}

export default Header;