import { StyleSheet } from "react-native";
import { cores } from "../../estilos";

export default StyleSheet.create({
  ajusteTela:{
    flex: 1,//Vai ocupar tamanho 1 na tela
    backgroundColor: cores.roxo,
  },
  ajusteTelaBaixo:{
    flex: 0,//Não irá ocupar nem um espaço na tela
    backgroundColor: cores.laranja,
  }
})