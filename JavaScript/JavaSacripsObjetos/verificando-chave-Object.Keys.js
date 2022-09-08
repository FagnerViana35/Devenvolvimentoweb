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
//Trás tudo para nós comn todas as Keys

function oferecerSeguro(obj){
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
oferecerSeguro(cliente);


const dependentes = (obj) =>{
    const propsDependente = Object.keys(obj);
    if(propsDependente.includes("dependentes") ){
        console.log("Tem dependentes")
    }else{
        console.log("Não possui dependentes");
    }
}

const valores = Object.values(cliente);
console.log(valores);
dependentes(cliente);

const array = Object.entries(cliente);
console.log(array);

