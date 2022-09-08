import React from "react";
import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from "styled-components";
import {fundoClaro} from "../UI/variaveis";
import Extrato from "../Cabecalho/Extrato";
const Container = styled.div`
  background-color: ${ ({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
  @media (max-width: 800px) {
    flex-direction: column;//Deixa os objetos em coluna =
    //display: flex; Deixa em vertical --
  }
`;
// const Container =() =>{} Uma maneira de fazer com tem duas varias com o mesmo nome 
export default () => {// Aqui ele vai exportar direto e não dá erro por ser a mesma classe
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        {/* <Conta /> */}
        <Extrato/>
      </Conteudo>
    </Container>
  );
};

// export default Container;
