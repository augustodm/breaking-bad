import React, { Component } from 'react';
import '../../style.css';

class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      characters: [] //cria um array para guardar aquilo que vem da api
    };
  }

  componentDidMount(){
    let url = 'https://www.breakingbadapi.com/api/characters' //adiciona o endereço da requisição a um let
    fetch(url) // chama o endereço da api
    .then((r)=> r.json()) //caso seja um sucesso entao atribui a resposta a um formato json
    .then((json)=>{ //caso funcione entao..
      let state = this.state; //chama a state
      state.characters = json; // atribui o objeto json a state characteres
      this.setState(state); //atualiza a state
      console.log(json); //log do arquivo jason so para conferir o que chegou da api
    })

  }

  render(){
    return(
      <div className="container"> 
        {this.state.characters.map((item)=>{ // pega item por item do objeto e retorna 1 a 1
          return(
            <article key={item.id} className="post">
              <strong className="nome"> {item.name} </strong>
              <img src={item.img} className="capa" />
              <a className='botao' href='#'>Saiba mais</a>
            </article>
          );
        })}
      </div>
    );
  }
}

export default Home;