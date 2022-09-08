import { Itarefa } from "./tarefa";

export interface PropsLista {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}
