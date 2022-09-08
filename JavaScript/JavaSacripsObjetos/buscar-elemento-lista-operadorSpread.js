const clientes = [
        {
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
    },
    {
            nome: "Marcio",
            idade: "32",
            cpf: "36596918874",
            email: "teste1@teste1.com",
            fones:["994152587", "996011678"],
            dependentes: [{
                nome:"Tica",
                parentesco:"Filha",
                dataNasc:"20/10/2022"
        }]
    }
]

const operadorSpread1 = [...clientes[0].dependentes, ...clientes[1].dependentes]
const operadorSpread2 = [clientes[0].dependentes, clientes[1].dependentes]
// console.log(operadorSpread1);
// console.log(operadorSpread2);

function sum(a,b,c){
    return a+b+c;
}
const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];
const array4 = [array1, array2];
// console.log(array3);
// console.log(array4);


const John = {
    name: "John",
    age: 20,
    adresses:[
        {
            address: 'Av Brasil, 123', 
            city: 'São Paulo'
        }
    ]
}

const peter = {
    ...John,
    name: 'Peter',
    age: 20
};

// peter.name = 'Peter';
// peter.age = 15;


// peter.adresses.push({
//     address: 'Av São Carlos, 2205', 
//     city: 'São Carlos'
// });

// peter.adresses = [...peter.adresses]
// peter.adresses.push({
//     address: 'Av São Carlos, 2205', 
//     city: 'São Carlos'
// });

peter.adresses = [ 
    ...peter.adresses,
    {
        address: 'Av São Carlos, 2205', 
        city: 'São Carlos' 
    }

]

console.log(peter);
console.log(John);


// addresses1 = [
//     {
//         address: 'Av Brasil, 123', 
//         city: 'São Paulo'
//     }
// ];

// const addresses2 = [...addresses1];
// addresses2.push('test');

// console.log(addresses2);






