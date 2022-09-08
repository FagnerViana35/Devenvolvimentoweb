import React from "react";
import style from '../../assets/components/botao.module.scss';
import { PropsBotao } from "../../types/propsBotao";

const Botao = ({children, type, onClick}: PropsBotao) => {

    return(
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}>
            {children}
        </button>
    )
}
export default Botao 

// class Botao extends React.Component<{children?: React.ReactNode, type?: "button" | "submit" |"reset" | undefined, onClick?: () => void}>{
//     render(){
//         const {type = "button", onClick} = this.props;
//         return(
//             <button onClick={onClick} type={type} className={style.botao}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }
//export default Botao;