import React, { Component } from 'react';
import "./estilo.css";

export default class CardNota extends Component {
    render() { 
        return(
        <section className ="card-nota">
            <header className="card-nota_cabecalho">
            <h3 className="card-nota_titulo">Título</h3>
            
            </header>
            <p className="card-nota_texto">Escreva sua nota</p>
        </section>
        );
    }
}
 


//imr cria o import react
//imrc cria o import com o component
//cc cria a estrutura react