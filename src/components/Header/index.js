import React, { Component } from 'react';
import '../../style.css';
import image from '../../imgs/header.png';

class Header extends Component{
  render(){
    return(
        <header>
          <img src={image} className='logo'/>
        </header>
    );
  }
}

export default Header;