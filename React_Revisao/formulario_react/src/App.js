//import React from 'react'; Para criar um import component imr no vs code
//
import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FomularioCadastro';

class App extends Component{
  render(){
  return (
    <frameElement></frameElement>
    <h1>Formlário de Cadastro</h1>
    <FormularioCadastro/>
  );
}
}
export default App;
//app.js é a página principal
//Quando quero usar um compomentes eu extendo pata component