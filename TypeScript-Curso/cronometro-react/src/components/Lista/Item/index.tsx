import style from '../../../assets/components/item.module.scss';
import { PropsItem } from '../../../types/propsItem';

const Item = (
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: PropsItem) => {
    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-Label='tarefa completada'></span>}
        </li>
    )
}
export default Item;
