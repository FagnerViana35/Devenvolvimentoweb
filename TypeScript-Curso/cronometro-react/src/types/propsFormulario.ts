import { Itarefa } from "./tarefa";

export interface PropsFormulario{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}