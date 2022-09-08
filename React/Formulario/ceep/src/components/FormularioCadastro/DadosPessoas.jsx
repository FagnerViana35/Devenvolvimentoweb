import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";


function DadosPessoais({aoEnviar}) {
  const [nome, setNome] = useState(""); // Aqui eu iniciei minha variavel//força a rederização do atributo
  const [sobrenome, setSobreNome] = useState(""); //Validação para quantidade de letras
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);  
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({nome,sobrenome,cpf,novidades,promocoes})
        }
        
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
        setNome(event.target.value)
        }}
        onBlur = {validarCampos}
        error = {!erros.nome.valido}
        helperText={erros.nome.texto}
        fullWidth
        variant="outlined"
        margin="normal"
        name = "nome"
        id="nome"
        label="Nome"
        color="primary"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobreNome(event.target.value);
        }}
        fullWidth
        variant="outlined"
        margin="normal"
        name = "Sobrenome"
        id="Sobrenome"
        label="Sobrenome"
        color="primary"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        fullWidth
        variant="outlined"
        margin="normal"
        id="CPF"
        name="cpf"
        label="CPF"
        color="primary"
      />

      <FormControlLabel
        label="Promoções "
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        
        control={
          <Switch
          checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
