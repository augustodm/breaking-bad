import React, { Component } from 'react';
import '../../style.css';
import api from '../../services/api'

class Quotes extends Component{

  constructor(props){
    super(props);
    this.state = {
      quote : '',
    }
  }

  async componentDidMount(){
    const quoteresponse = await api.get(`quote/random`);
    this.setState({
      quote :  quoteresponse.data[0]
    });
  }

  render(){
    return(
      <div className="quotehead">
        <h1> " {this.state.quote.quote} "</h1>
        <h3> {this.state.quote.author} </h3>
      </div>
    );
  }
}

export default Quotes;