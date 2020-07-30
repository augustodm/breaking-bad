import React, { Component } from 'react';
import '../../style.css';
import image from '../../imgs/header.png';
import { Link } from 'react-router-dom';


class Header extends Component{

  render(){
    return(
        <header>
          <Link className="homebutton" to="/"> Home </Link>
          <img src={image} className='logo'/>
        </header>
    );
  }
}

export default Header;