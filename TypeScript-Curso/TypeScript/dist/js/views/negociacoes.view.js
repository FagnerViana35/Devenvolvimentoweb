import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                <tr>
           <tbody>
                ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>${Intl.DateTimeFormat().format(negociacao.data)}</td><!--Data com a função prontas-->
                            <td>${negociacao.quantidade}</td> <!--const negociacoes com objeto quantidade-->
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        
        </table>
        `;
    } //Vai lista os dados, fazendo um map para os itens da lista
}
//O model negociações está tipado com Negociações
