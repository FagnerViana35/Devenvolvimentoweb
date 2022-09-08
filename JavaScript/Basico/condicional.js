 const lista = new Array();

while (lista == '') {
    lista.push('São Paulo');
    lista.push('Rio de Janeiro');
    lista.push('Rio Grande do Sul');
    lista.push('Amazonas');
}
for (const contar of lista) {
    console.log(contar);    
}
console.log("///////////////////////////")

const Gabriel = 18;
console.log(`Gabriel é maior de idade e pode ir nos destinos: `)
if (Gabriel >= 18) {

    for (const i of lista) {
        console.log(i);
    }
} else {
    console.log(`Gabriel é menor de idade e não pode viajar`);
}


