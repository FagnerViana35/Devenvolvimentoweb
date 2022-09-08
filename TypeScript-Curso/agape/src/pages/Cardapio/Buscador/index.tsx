import { PropsBuscador } from "types/PropsBuscador";
import styles from './Buscador.module.scss'
import {CgSearch} from 'react-icons/cg';

export default function Buscador({busca, setBusca}: PropsBuscador){
    return <div className={styles.buscador}>
        <input
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder='Buscar'
        />
        <CgSearch 
            size={20}
            color='#4c4d5e'
        />
    </div>
}
