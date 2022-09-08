import React, { Component } from 'react';
//import deletar from '../assets/image/delete.svg';
import {ReactComponent as DeletarSVG} from '../assets/image/delete.svg'
class CardDeNota extends Component {
    render(){
        return(
          <section className='card-nota'>
            <header className='card-nota_cabecalho'>
              <h3 className='card-nota_nome'>{this.props.titulo}</h3>
              <DeletarSVG  onClick={this.props.apagarNota}/>
              {/* <img src={deletar} alt="deletar card" /> */}
            </header>
            <p className='card-nota_texto'>{this.props.texto}</p>
            
          </section>
        );
    }
}
export default CardDeNota;
//Deletando cards 12:41