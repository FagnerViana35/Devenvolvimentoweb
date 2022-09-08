import React, { useEffect, useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from '../assets/pages/app.module.scss';
import Cronometro from '../components/cronometro';
import { Itarefa } from '../types/tarefa';


function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  const [selecionado, setSelecionado] = useState<Itarefa>();
  const [carregar, setCarregar] = useState([])
  const selecionaTarefa = (tarefaSelecionada:Itarefa) =>{
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true: false  
    })))
  }
  const finalizarTarefa = () =>{
    if(selecionado) {
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id) {
            setSelecionado(undefined)
            return{
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa;
        }))
      }
    }

    useEffect(() => {
      async function carregaRepositorios () {
          const resposta = await fetch('https://api.github.com/users/fagnervj/repos');
          const repositorios = await resposta.json();
          setCarregar(repositorios)
        return repositorios;
      } 
      carregaRepositorios();
    }, []);

  console.log(carregar)
  
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas ={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa} 
        />
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
