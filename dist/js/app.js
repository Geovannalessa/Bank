//importação do controller
import { NegociacaoController } from "./controllers/negociacao.js";
//instanciação
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
