import React, { Component } from 'react';
import '../../style.css';

class Character extends Component{

  constructor(props){
    super(props);
    this.state ={
      selected_char: ''
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    let url = `https://www.breakingbadapi.com/api/characters/${id}`;
    fetch(url) // chama o endereço da api
    .then((r)=>r.json())
    .then((json)=>{
      this.setState({selected_char : json[0]});
    })
  }

  render(){
    console.log(this.state.selected_char.img);
    return(
      <div className="charcontainer"> 
        <article key={this.state.selected_char.char_id} className="charpost">
          <img src={this.state.selected_char.img} className="charcapa"/>
          <div className="article">
          <strong className="charname">{this.state.selected_char.name}</strong>
          <a className="resume">Nickname: {this.state.selected_char.nickname}</a>
          <a className="resume">Occupation: {this.state.selected_char.occupation}</a>
          <a className="resume">Portrayed: {this.state.selected_char.portrayed}</a>
          <a className="resume">Birthday: {this.state.selected_char.birthday}</a>
          <a className="resume">Status: {this.state.selected_char.status}</a>
          </div>
        </article>
      </div>
    );
  }
}

export default Character;