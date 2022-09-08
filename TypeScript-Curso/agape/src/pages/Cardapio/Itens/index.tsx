import Item from "./Item"
import cardapio from "./itens.json"
import styles from './Itens.module.scss'

export default function Itens() {
    return (
      <div className={styles.itens}>
        {cardapio.map(item => (
          <Item 
            key={item.id}
            {...item} 
            // title={item.title}
            // description={item.description}
          />
        ))}
      </div>
    )
  }