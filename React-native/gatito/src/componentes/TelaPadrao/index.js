import React from 'react';

import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilosGlobal, { cores } from '../../estilos';
import estilos from './estilos';

export default function TelaPadrao({ children }) {
  return <>
    <SafeAreaView style={estilos.ajusteTela}>
    <StatusBar backgroundColor={cores.roxo}/>
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={estilosGlobal.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.ajusteTelaBaixo} />
  </>
}
//Na linha 9  tem um style que irá modificar a parte de cima do APP
//Na linha 10 tem um backGroundColor que modifica O background das telas do Android
//Na linha 18 no SafeAreaView tem um estilo que vai modificar os estilos do Ios
//Na linha 18 no SafeAreaView tem um estilo que vai alterar a parte de baixo do app