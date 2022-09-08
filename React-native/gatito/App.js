import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
//import Reactotron from 'reactotron-react-native';

import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/Rotas';
//import Reactotron from 'reactotron-react-native';

//Reactotron.configure().useReactNative().connect()//configuração do reactotron
//console.tron = Reactotron;

export default function App() {
  // Reactotron.log({
  //   curso:"Alura"
  // })
  // console.tron({
  //   curso:"Alura"
  // })
  return <TelaPadrao><Rotas /></TelaPadrao>;
}
//Foi colocado a Tela Padrão Envolvendo a Rotas que tem o menu