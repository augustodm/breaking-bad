import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import api from '../../services/api'
import Quotes from '../../components/Quotes';

class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      characters : [], //cria um array para guardar aquilo que vem da api
      quote : ''
    }
  }

  async componentDidMount(){ // Chamando a api com Axios
    api.get(`characters`).then(async response =>{ //chama o component api criado pelo axios, uso o then para esperar essa ação assincrona acabar e puxo uma arrow func para começar uma outra requisição
      const characters = response.data; // .data serve para guardar na const apenas as informações que vem da api
      // const quoteresponse = await api.get(`quote/random`); caso eu quisesse fazer outra requisição
      this.setState({ //atualizo os states
        characters : characters,
        // quote :  quoteresponse.data exemplo de como ficaria 
      });
    });
  }

  // componentDidMount(){ Maneira de fazer com o fetch
  //   let url = 'https://www.breakingbadapi.com/api/characters' //adiciona o endereço da requisição a um let
  //   fetch(url) // chama o endereço da api
  //   .then((r)=> r.json()) //caso seja um sucesso entao atribui a resposta a um formato json
  //   .then((json)=>{ //caso funcione entao..
  //     let state = this.state; //chama a state
  //     state.characters = json; // atribui o objeto json a state characteres
  //     this.setState(state); //atualiza a state
  //     console.log(json); //log do arquivo jason so para conferir o que chegou da api
  //   })
  // }

  render(){
    console.log(this.state.quote);
    // console.log(this.state.characters);
    return(
      <div className="container">
        <Quotes/>
        {/* <article> 
          <h1>{ this.state.quote.quote}</h1>
          <h2>{ this.state.quote.author}</h2>
        </article> */}
        {this.state.characters.map((character)=>{ // pega item por item do objeto e retorna 1 a 1
          return(
            <article key={character.char_id} className="post">
              <strong className="nome"> {character.name} </strong>
              <img src={character.img} className="capa" />
              <Link  to={`/character/${character.char_id}`} className='botao'> Saiba mais </Link>
            </article>
          );
        })}
      </div>
    );
  }
}

export default Home;