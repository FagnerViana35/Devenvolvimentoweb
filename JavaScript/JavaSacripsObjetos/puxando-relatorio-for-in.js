const cliente = {
    nome: "Fagner",
    idade: "33",
    cpf: "123456789",
    email: "teste@teste.com",
    fones:["981457895", "981458789"],
    dependentes: [{
        nome:"Gabriel",
        parentesco:"Filho",
        dataNasc:"06/11/2013"
    },
    {
        nome:"Valquiria",
        parentesco:"Esposa",
        dataNasc:"20/08/1974"
    }
],
saldo:100,
depositar: function(valor){
    this.saldo += valor;
}
}

let relatorio=''; 
for (let info in cliente){
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
        continue
    }else{relatorio += ` 
        ${info} ===> ${cliente[info]}
        `
    } 
}

console.log(relatorio);

relatorio ='';
for(item in cliente){
    if(typeof cliente[item] === 'object' || typeof cliente[item] === 'function'){
        continue
    }else{
        relatorio += `
        ${item} => ${cliente[item]}`;
    }
}
console.log(relatorio);
console.log(typeof relatorio);

