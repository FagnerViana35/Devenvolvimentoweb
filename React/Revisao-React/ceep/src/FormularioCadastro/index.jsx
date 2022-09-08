import React, { Component } from 'react';

class Formulario extends Component{
    constructor(props){
        super(props);
        this.titulo="";
        this.texto="";
        
    }//1º Crio um atributo

    
    _handlerMudancaTexto(event){
        event.stopPropagation()
        this.titulo = event.target.value;
    }
    _handlerMudancaDate(event){
        event.stopPropagation();
        this.texto = event.target.value
    }//2º Função para pegar o valor do clique event.target.value

    _criarCard(event){
        event.preventDefault();
        event.stopPropagation()
        this.props.criarNotas(this.titulo, this.texto)
        //Passo o valor em prop
    }

    

    render(){
        return (
        <form className='form-cadastro'
            onSubmit={this._criarCard.bind(this)}
        >
            <input
            type='text'
            placeholder='Digita a data'
            className='form-cadastro_input'
            onChange={this._handlerMudancaDate.bind(this)}
            />
            <textarea    
                rows={15}        
                placeholder='Escreva sua nota'
                className='form-cadastro_input'
                onChange={this._handlerMudancaTexto.bind(this)}
                />
            
            <button className='form-cadastro_input form-cadastro_submit'>
                Criar Nota
            </button>
        </form>
        );
    }
}
export default Formulario;