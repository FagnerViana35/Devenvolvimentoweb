import React, { Component } from 'react';
import CardDeNota from '../CardDeNota';

class ListasDeNotas extends Component{
  render(){
    return(
      <ul className='lista-notas'>
        {this.props.notas.map((nota, index)=>{
          return(
          <li className='lista-notas_item' key={index}>

            <CardDeNota 
            indice = {index}
            apagarNota={this.props.apagarNota}
            titulo={nota.titulo} 
            texto={nota.texto}/>
          </li>
          );
          }
        )}
      </ul>
      
    );
  }
}
export default ListasDeNotas;

