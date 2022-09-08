//Criar uma promise
const myPromises = new Promise((resolve, reject) =>{
     
    const nome = "Fagner";
    
    if(nome === "Fagner"){
        resolve("Usuario Fagner Encontrado")
    }else{
        reject("Usuario Fagner Não encontrado")
    }
})
myPromises.then((data) =>{console.log(data)})
    
//Encadeamento de then

const thenPromise = new Promise((resolve, reject) => {

    const nome = "Fagner"
    
    if(nome === 'Fagner'){
        resolve(`Usuario ${nome} encontrado`);
    }else{
        reject(`Usuario ${nome} não encontrado`);
    }
})

thenPromise
    .then((data) => {return data.toLowerCase()})
    .then((stringModificada) => {console.log(stringModificada)})

//Retorno Promise Catch

catchPromise = new Promise((resolve, reject)=>{
    const nome = "Fagne"

    if(nome === "Fagner"){
        resolve(`Usuario ${nome} encontrado`)
    }else{
        reject(`Usuario ${nome} não encontrado`)
    }
})
.then((data) => { 
    return console.log(data)
    })
.catch((err) => { 
    console.log(`Aconteceu um erro: ${err}`)
})

//Resolver varias Promises com all

const p1 = new Promise((resolve, reject) => { 
    setTimeout(() =>{
        resolve('P1 Ok! TimeOut')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => { resolve("P2 Ok")})

const p3 = new Promise((resolve, reject) => { resolve("P3 Ok")})

const promiseAll = Promise.all([p1, p2, p3])
    .then((data) => {return console.log(data)})

//Resolver varias Promises com Race

const p4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('P4 OK TimeOut')})
    })

const p5 = new Promise((resolve, reject) => { resolve('p5 OK')})

const p6 = new Promise((resolve, reject) => { resolve('p6 OK')})

const racePromise = Promise
    .race([p4,p5,p6])
    .then((data)=>{console.log(data)})
    
console.log("Antes de tudo");

//////////////////////////////////Promise Fetch API////////////////////////////////
//////////////////////////////////Fetch request API do gitHub ////////////////////////////////

const userName = "FagnerVJ";

fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
    headers:{
        Accept: 'aplication/vnd.github.v3+json'
    },
})
.then((response) =>{
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(`O nome do Usuario é ${data.name}`)
}).catch((err)=>{
    console.log(`Houve algum erro: ${err}`)
})

/////////////////////////////////////////////////////
//https://api.github.com/users/
//aplication/vnd.github.v3+json

let letra = 'GeeksforGeeks';
 console.log(letra.charAt(4))

 let number = 'GeeksforGeeks';
 console.log(number.indexOf('G'))

 let data='false'; 
 data?console.log('first statement'):console.log('second statement');



function clicar() {
    alert("Tudo posso");
}
function focused(){    
    addEventListener("click", () =>{
        alert("Foi")
    })
}
    
   


const school = new Object();
school.name = 'Vivekanada school';
school.location = 'Delhi';
school.established = 1971;
  
school.displayInfo = function(){
    console.log(`${school.name} was established 
          in ${school.established} at ${school.location}`);
}

var numbers = [
    {
    numero: 1
    },
    { 
    numero: 2
    },
    { 
    numero: 3
    },
    { 
    numero: 4 
    },
    {
    numero: 5
    }
    ];
const numero = numbers.map((n) =>{
    document.write(n)
})
const lista = [1,2,3,4,5,6,7];

for(let listas of lista){
    document.write(listas);
}

lista.forEach((n)=>{
    document.write(n)
})

let person = {
     name : "John",
    age : 31,
    logInfo : function() {
        document.write(`Meu nome é ${this.name} eu tenho ${this.age}`)
    }
    }
   // logs John is 31 years old
   person.logInfo() 