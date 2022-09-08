import styles from './Filtros.module.scss';
import filtros from './filtros.json';
import { PropsFiltros } from 'types/ProspFiltros';
import { PropsFiltrosState } from 'types/PropsFiltroState';
import classNames from 'classnames'

//type opcao = typeof filtros[0]

export default function Filtros({filtro, setFiltro}: PropsFiltrosState) {
    function selecionarFiltro(opcao: PropsFiltros) { 
        if(filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    }

    return <div className={styles.filtros}>
        {filtros.map((opcao) => (
            <button
                // className={`${styles.filtros__filtro} ${filtro === opcao.id ? styles['filtros__filtro--ativo']: ''}`}
                className={classNames({
                    [styles.filtros__filtro]: true,
                    [styles['filtros__filtro--ativo']]: filtro === opcao.id
                    
                })}
                key={opcao.id}
                onClick={() => selecionarFiltro(opcao)}
            >
                {opcao.label}
            </button>
        ))}
    </div>
}