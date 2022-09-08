import React from 'react';
import { Box, Botao } from '../../UI';
import { extratoLista } from '../../../info';
import Items from '../../Items';

const Extrato = () =>{
    return(
        <Box> 
            {extratoLista.updates.map(({ id, type, from, value, date }) => { //Imprimi um valor na tela
                    return(
                        <Items key={id} type={type} from={from} value={value} date ={date} />//props que será imprimida nos items
                    );
                })}
            <Botao>Ver Mais</Botao>
        </Box>
    );
}

export default Extrato;