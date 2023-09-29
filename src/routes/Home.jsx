import React from 'react';
import styles from '../css/home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.produtos}>
          <p>CONHEÇA OS NOVOS GAMES DA ATUALIDADE</p>
          <a href="" className={styles.btn}>
            Conheça mais
          </a>
        </div>
      </div>
    </section>
  );
}
