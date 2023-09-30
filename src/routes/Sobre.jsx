import React from 'react';
import styles from '../css/sobre.module.css';

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <h1 className={styles.titulo}>
        LIVE MINISTRADA PELOS{' '}
        <span className={styles.nomeProf}>PROFESSORES:</span>
      </h1>
      <h2>Alexandre de Jesus</h2>
      <h2>Luis Carlos Silva</h2>
      <h2>Wellington Cidade</h2>
    </section>
  );
}
