import React, { Component } from 'react';
import '../../style.css';
import api from '../../services/api'

class Character extends Component{

  constructor(props){
    super(props);
    this.state ={
      character : [],
      char_name : '',
      quote : '',
    }
  }

  async componentDidMount(){
    const { id } = this.props.match.params;
    api.get(`characters/${id}`).then(async response =>{
      const character = response.data[0];
      const quoteresponse = await api.get(`quote/random?author=${character.name}`);
      const quote = quoteresponse.data[0];
      this.setState({
        character : character,
        char_name : character.name,
        quote :  quote
      });
    });
  }

  render(){
    // console.log(this.state.quote);
    return(
      <div className="charcontainer"> 
        <article key={this.state.character.char_id} className="charpost">
          <img src={this.state.character.img} className="charcapa"/>
          <div className="article">
          <strong className="charname">{this.state.character.name}</strong>
          <a className="resume">Nickname: {this.state.character.nickname}</a>
          <a className="resume">Occupation: {this.state.character.occupation}</a>
          <a className="resume">Portrayed: {this.state.character.portrayed}</a>
          <a className="resume">Birthday: {this.state.character.birthday}</a>
          <a className="resume">Status: {this.state.character.status}</a>
          <a className="resume">{ this.state.quote ? 'Quote: ' + this.state.quote.quote : ''}</a>
          </div>
        </article>
      </div>
    );
  }
}

export default Character;