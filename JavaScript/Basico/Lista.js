lista = ['São Paulo', 'Rio de Janeiro', 'Salvador'];
console.log(lista);
console.log(lista[1])

for (const iterator of lista) {
    console.log(iterator);
};

if (lista[0] != 'São Paulo') {
   lista.push('Rio Grande do Sul') 
}else{
    lista.splice(1,1)//Posição e quantidade de elementos 
}
console.log("///////////////////////")
for (const iterator of lista) {
    console.log(iterator);
};
console.log(lista[1])
console.log('https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array')





