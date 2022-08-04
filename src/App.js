import React,{Component} from 'react'
import uva from './img/uva.jpg'
export default class State extends Component{
  state={
    name: 'Renyellen',
    idade:25,
    comidaFavorita:'Strogonof',
    musica:['Você não soube me amar','A dona da Pisadinha','Notificação Preferida']
  }
  render(){
    return(
    <div>
    <h1>{this.state.nome}</h1>
      <h2>{this.state.idade}</h2>
      <h3>{this.state.comidaFavorita}</h3>
      <ul>
        <li>{this.state.musica[0]}</li>
        <li>{this.state.musica[1]}</li>
        <li>{this.state.musica[2]}</li>
      </ul>
      <img src={uva}/>
    </div>
    )
  }
  }
