import style from '../../assets/components/lista.module.scss';
import Item from "./Item";
import { PropsLista } from '../../types/propsLista';


const Lista = ({ tarefas, selecionaTarefa }: PropsLista) => {
    return(
        <aside className = {style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map((item, index)=>(
                       <Item 
                            selecionaTarefa={selecionaTarefa}
                            key={item.id}
                            {...item}
                            // key={item.id}   
                            // tarefa={item.tarefa}
                            // tempo={item.tempo}
                        />    
                    ))
                }
                </ul>
        </aside>
    )
}
export default Lista;