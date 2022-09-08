import React, { Component }from 'react';
import Formulario from './FormularioCadastro';
import ListasDeNotas from './ListasDeNotas';


class App extends Component{
  constructor(){
    super()

    this.state = {
      notas:[]
    } 
  }

  criarNotas(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado={
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1)
    this.setState({notas:arrayNotas})
    console.log("Deletar");
  }

  render(){
  return (
     <section className='conteudo'>
      <Formulario criarNotas={this.criarNotas.bind(this)}/>
      <ListasDeNotas 
      apagarNota={this.deletarNota.bind(this)}
      notas={this.state.notas}/>
    </section>
    );
  }
}
//
export default App;
