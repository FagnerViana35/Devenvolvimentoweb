import React, { Component } from 'react';
import CardNota from '../CardNota';
import "./estilo.css";

export default class ListaNotas extends Component{
    render(){
        return(
        <ul className ="lista-notas">
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index)=> {
                return(
                <li className ="lista-notas_item" key={index}>
                    
                    <CardNota/>
                </li>
                );
            })}
        </ul>
               
        );
    }

}

//https://cursos.alura.com.br/forum/topico-retorno-do-array-map-125929 Array.of(1,2,3).map(nome => {});
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/of
//https://pt-br.reactjs.org/docs/lists-and-keys.html Sobre map, keys
