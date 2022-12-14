//Será o arquivo APP.JS para ter o contato com o terminal
import validaURLs from './http-validacoes.js';
import pegaArquivo from './index.js';
import chalk from 'chalk';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if (caminho[3] === 'validar') {
    console.log(chalk.yellow('links validados'), await validaURLs(resultado));
  } else {
    console.log(chalk.yellow('lista de links'), resultado);
  }
}

processaTexto(caminho);

