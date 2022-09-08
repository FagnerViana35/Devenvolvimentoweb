import { NegociacaoController } from './controllers/negociacao-controller.js';
//import { NegociacoesView } from './views/neciacoes.view.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});

/*const negociacaoView = new NegociacoesView();
const template = negociacaoView.template();
console.log(template);
*/