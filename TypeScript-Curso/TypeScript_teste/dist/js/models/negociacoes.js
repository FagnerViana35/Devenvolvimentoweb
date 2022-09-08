export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        this.negociacoes = []; //alternativa
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /*ista(): ReadonlyArray<Negociacao>{
        return [...this.negociacoes];
    }*/
    lista() {
        return [...this.negociacoes];
    }
}
