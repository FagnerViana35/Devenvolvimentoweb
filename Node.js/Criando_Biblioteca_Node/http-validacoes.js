import fetch from 'node-fetch';

const manejaErros = (erro) => {
  throw new Error(erro.message);
}

const checaStatus = async (arrayURLs) => {
  try {
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async url => {
          const res = await fetch(url)
          return res.status;
    }))
    return arrayStatus;
  } catch(erro) {
    manejaErros(erro);
  }
}

const geraArrayDeURLs = (arrayLinks) => {
  return arrayLinks
    .map(objetoLink => Object
      .values(objetoLink).join());
}

const validaURLs  = async (arrayLinks) => {
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checaStatus(links);
  
  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice]
  }))
  return resultados;
}

export default validaURLs;

//https://www.npmjs.com/package/node-fetch
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax spread operator
//https://cursos.alura.com.br/extra/alura-mais/destructuring-em-js-c308