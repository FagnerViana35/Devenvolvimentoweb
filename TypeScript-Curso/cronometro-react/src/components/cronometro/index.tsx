import Botao from "../Botao";
import Relogio from "./Relogio";
import style from '../../assets/components/cronometro.module.scss';
import { PropsCronometro } from "../../types/propsCronometro";
import TempoParaSegundos from "../../common/utils/time";
import { useEffect, useState } from "react";

const Cronometro = ({selecionado, finalizarTarefa}: PropsCronometro) =>{
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
            if(selecionado?.tempo){
            setTempo(TempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])
    
    const regressiva = (contador: number = 0) =>{
        setTimeout(() =>{
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicei o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo ={tempo}/>
            </div>
            <Botao onClick={()=>{regressiva(tempo)}}>
              Começar  
            </Botao>
        </div>
    )
}
export default Cronometro;