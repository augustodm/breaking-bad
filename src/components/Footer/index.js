import React, { Component } from 'react';
import '../../style.css';

class Footer extends Component{
  render(){
    return(
        <footer className="footer">
          <div className="footerpost">
            <strong>Contact:</strong>
            <a>augustomendes.dm@gmail.com</a>
          </div>
          <div className="footerpost1">
            <strong className="apresentation">BreakingBad Character Finder</strong>
            <a> This project was created for practice programming languages like ReactJS, JavaScript, HTML and CSS<br/></a>
            <a> All information and images were taken from: https://breakingbadapi.com/</a>
          </div>
          <div className="footerpost">
            <strong>Created by:</strong>
            <a>Augusto Mendes</a>
            <strong>From: <br/></strong>
            <a>Guará, Distrito Federal</a>
          </div>
        </footer>
    );
  }
}

export default Footer;