import React from 'react'
import Error from '../img/Error.png'
import { Link } from 'react-router-dom'
import styles from '../css/Error.module.css'

export default function Erro() {
  return (

    <div>
    
      <img src={Error} className={styles.img1} />
      <Link to="/" className={styles.voltar}>VOLTAR</Link>
      
    </div>
  )
}
