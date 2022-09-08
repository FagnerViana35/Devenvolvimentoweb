import { Negociacoes } from "../models/negociacoes";

export abstract class View<T>{//Classe abstract 
    protected elemento: HTMLElement;//Como se fosse um private só que com proteção e tem exports entre as classes

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void{// O UPdate vai carregar o o elemento com o innerHTML que pega o html interno e mostra no template()
        const template = this.template(model);
        this.elemento.innerHTML = template;// qual html que estiver aqui dentro será jogaodo para o DOM
    }
    abstract template(model: T ): string;
       
}
