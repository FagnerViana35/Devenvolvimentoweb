import React, {useState}from "react";
import { ThemeProvider } from "styled-components";
import { temaEscuro, temaClaro } from "./Components/UI/temas";

import { BtnTema } from "./Components/UI";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import SwitcherTema from "./Components/SwitcherTema";


function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
  
    <ThemeProvider theme = {tema ? temaClaro : temaEscuro}>  
      <GlobalStyle />
      <BtnTema onClick = {toggleTema}>
        <SwitcherTema tema = {tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
