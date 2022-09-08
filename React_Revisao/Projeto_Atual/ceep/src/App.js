import { Component } from 'react';
import './assets/App.css';
import FormularioCadastro from './Components/FormularioCadastro/formularioCadastro';
import ListaDeNotas from './Components/ListaDeNotas/listaNotas';
import "./assets/App.css";
import './assets/index.css';

export default class App extends Component {
  render(){
  return (
    <section className="conteudo">
      <FormularioCadastro/>
      <ListaDeNotas/>
    </section>
  );
  }
}
//
