import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import Botao from '../Botao';
import { PropsFormulario } from '../../types/propsFormulario';

import style from '../../assets/components/formulario.module.scss';

const Formulario = ({setTarefas}:PropsFormulario) =>{
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');

    const adicionarTarefa = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTarefas(tarefasAntigas => 
                [ 
                    ...tarefasAntigas,
                    { 
                        tarefa,
                        tempo,
                        selecionado: false,
                        completado: false,
                        id: uuidv4() 
                    }
                ]
            );   
            setTarefa('');
            setTempo('00:00')
        }
        
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                <label htmlFor='tarefa'>
                     Adicione um novo estudo 
               </label>
                <input 
                    type="text"
                    name='tarefa'
                    id='tarefa'
                    placeholder='O que você quer estudar'
                    value={tarefa}
                    required
                    onChange={(event) =>{setTarefa(event.target.value)}}
                />
                
                </div>
                <div className={style.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input 
                    type="time"
                    step='1'
                    name='tempo'
                    
                    id='tempo'
                    min="00:00:00"
                    max='01:30:00'
                    required
                    value={tempo}
                    onChange={(event) => {setTempo(event.target.value)}}
                />
                </div>
            <Botao type="submit">
                Adicionar
            </Botao>
            </form>
    )
}

export default Formulario;

// class Formulario extends React.Component<{
//     setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
//     }> {
//     state = {
//         tarefa: '',
//         tempo: '00:00'
//     }

//     adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
//         event.preventDefault();
//         this.props.setTarefas(tarefasAntigas => 
//             [ ...tarefasAntigas,
//                 { 
//                     ...this.state,
//                     selecionado: false,
//                     completado: false,
//                     id: uuidv4() 
//                 }
//             ]
//         );   
//         this.setState({
//             tarefa: '',
//             tempo:'00:00'
//         })
//     }

//     render() {
//         return(
//             <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
//                 <div className={style.inputContainer}>
//                 <label htmlFor='tarefa'>
//                     Adicione um novo estudo 
//                 </label>
//                 <input 
//                     type="text"
//                     name='tarefa'
//                     id='tarefa'
//                     placeholder='O que você quer estudar'
//                     value={this.state.tarefa}
//                     required
//                     onChange={(event) =>{this.setState({...this.state, tarefa: event.target.value})}}
//                 />
                
//                 </div>
//                 <div className={style.inputContainer}>
//                 <label htmlFor='tempo'>
//                     Tempo
//                 </label>
//                 <input 
//                     type="time"
//                     step='1'
//                     name='tempo'
                    
//                     id='tempo'
//                     min="00:00:00"
//                     max='01:30:00'
//                     required
//                     value={this.state.tempo}
//                     onChange={(event) => {this.setState({...this.state, tempo: event.target.value})}}
//                 />
//                 </div>
//             <Botao type="submit">
//                 Adicionar
//             </Botao>
//             </form>
//         )
//     }
// }
// export default Formulario;
