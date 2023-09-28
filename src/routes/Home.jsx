import React from 'react';
import styles from '../css/home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.produtos}>
          <h1 id="tituloProduto">Produtos</h1>

          <p>CONHEÇAS OS NOVOS PRODUTOS DA LOJA</p>
          <a href="" className={styles.btn}>
            Conheça mais
          </a>
        </div>
      </div>
    </section>
  );
}
