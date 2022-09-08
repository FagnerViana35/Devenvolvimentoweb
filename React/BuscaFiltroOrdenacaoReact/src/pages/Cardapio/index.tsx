import styles from "./Cardapio.module.scss";
// import { ReactComponent as Logo } from "assets/logo.svg";
import Logo from "assets/logo.svg";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from './Itens';

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <main>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img  className={styles.logo_imagem} src={Logo} alt="" />
        </div>
        <div className={styles.menu}>
          <ul className={styles.menu_ul}>
            <li className={styles.menu_li}>
              <a href="/" className={styles.menu_link} >
                Home
              </a>
              
            </li>
            <li className={styles.menu_li}>
              Jogo
            </li>
            <li className={styles.menu_li}>
              Tudo
            </li>
            <li className={styles.menu_li}>
              Case
            </li>
          </ul>
        </div>
          {/* <Logo /> */}
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Loja de Lojas
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Busca Jogos</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  )
}