import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = []; //alternativa

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }

    /*ista(): ReadonlyArray<Negociacao>{
        return [...this.negociacoes];
    }*/
    lista(): readonly Negociacao[]{//alternativa
        return [...this.negociacoes];
    }
}
