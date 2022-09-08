import { Itarefa } from "./tarefa";

export interface PropsItem extends Itarefa {
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}