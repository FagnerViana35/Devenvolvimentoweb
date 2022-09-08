import React, { Component } from 'react';
import "./estilo.css";


export default class FormularioCadastro extends Component{

    constructor(){
        super();
        this.titulo ="";//Usando um atribulo de uma instancia 

    }
    handlerMudancaTitulo(evento){
        this.titulo = evento.target.value //
        console.log(this.titulo);
    }
    render(){
        return(
        
        <form className="form-cadastro">
            <input 
                type ="text" 
                placeholder = "Título" 
                className ="form-cadastro_input"
                onChange = {this.handlerMudancaTitulo.bind(this)}//
            />

            <textarea 
                rows ={15}
                placeholder= "Escreva um texto..."
                className = "form-cadastro_input"
            />

            <button className="form-cadastro_input form-cadastro_submit">
                Criar Nota
            </button>
        </form>
          
          );
    }
}
//https://www.w3schools.com/jsref/event_onchange.asp
//<select onchange="myFunction()">