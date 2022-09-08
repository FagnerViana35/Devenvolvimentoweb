import { Negociacao } from "../models/negociacao.js";
import { View } from "./view.js";

export class MensagemView extends View<string>{
    
    template(model: string) :string{
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }

}