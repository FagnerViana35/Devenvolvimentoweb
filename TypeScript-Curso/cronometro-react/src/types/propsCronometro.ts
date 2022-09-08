import { Itarefa } from "./tarefa";

export interface PropsCronometro {
    selecionado: Itarefa | undefined,
    finalizarTarefa: () => void
}