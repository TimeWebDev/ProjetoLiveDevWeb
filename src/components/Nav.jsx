import {} from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.module.css';

function Nav() {
  return (
    <section className={styles.menu}>
      <nav className={styles.menuNav}>
        <ul className={styles.menuNnavulli}>
        <li>  <Link to="/" className={styles.tlink}>Home</Link></li>
          <li> 
            <Link to="produtos" className={styles.tlink}>
              Produtos
            </Link>
          </li>
          <li> 
            <Link to="sobre" className={styles.tlink}>
              Sobre
            </Link>
          </li>
      
        
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
