const cliente = {
    nome: "Fagner",
    idade: "33",
    cpf: "123456789",
    email: "teste@teste.com"

}
const array = ["nome", "idade", "cpf" , "email"];

//Array 
console.log(cliente[array[0]]);
console.log(cliente.cpf.substring(0,3))
array.forEach((n) => {console.log(cliente[n])})

//Adicionar algo no objeto
console.log(cliente);
cliente.fone = "99955588844"
console.log(cliente);

//Lista dentro de Objetos
const cliente2 = {
    nome: "Fagner",
    idade: "33",
    cpf: "123456789",
    email: "teste@teste.com",
    fones:["981457895", "981458789"]
}

if(cliente2.fones.length > 1){
    console.log("Cliente possui mais de um de telefone")
    cliente2.fones.forEach((n) => { console.log(n)})
}else{
    console.log("Cliente possui apenas um telefone");
}

//Lista dentro de Objeto
const cliente3 = {
    nome: "Fagner",
    idade: "33",
    cpf: "123456789",
    email: "teste@teste.com",
    fones:["981457895", "981458789"]
}

//Objeto dentro de Objeto
cliente3.dependentes = {
    nome:"Gabriel",
    parentesco:"Filho",
    dataNasc:"06/11/2013"
}
console.log(cliente3.dependentes.nome, cliente3.dependentes.parentesco);

//Lista de Objetos Adicionando
const cliente4 = {
    nome: "Fagner",
    idade: "33",
    cpf: "123456789",
    email: "teste@teste.com",
    fones:["981457895", "981458789"],
    dependentes: [{
        nome:"Gabriel",
        parentesco:"Filho",
        dataNasc:"06/11/2013"
    }]
}
console.log(cliente4)

cliente4.dependentes.push({
    nome:"Valquiria",
    parentesco:"Esposa",
    dataNasc:"20/08/1974"
})
console.log(cliente4)

const depen = cliente4.dependentes.filter(dependente => (dependente.dataNasc === "20/08/1974"))

console.log(depen[0].nome);

//Funções para entrar parametros
const cliente5 = {
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

console.log(cliente5.saldo)

cliente5.depositar(30);

console.log(cliente5.saldo)






//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring