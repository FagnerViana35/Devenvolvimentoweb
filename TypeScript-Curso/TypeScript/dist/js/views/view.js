export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template; // qual html que estiver aqui dentro será jogaodo para o DOM
    }
    template(model) {
        throw Error('Classe filha precisa implementar o mérodo template');
    }
}
