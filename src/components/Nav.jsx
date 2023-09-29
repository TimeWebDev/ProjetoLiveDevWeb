import {} from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/header.module.css';

function Nav() {
  return (
    <header className={styles.menu}>
      <nav className={styles.menuNav}>
        <ul className={styles.menuNnavulli}>
          <li>
            {' '}
            <Link to="/" className={styles.tlink}>
              Home
            </Link>
          </li>
          {/* chamar somente quando estiver logado
          <li>
            <Link to="/produtos" className={styles.tlink}>
              Produtos
            </Link>
          
          </li>
          */}
          <li>
            <Link to="/sobre" className={styles.tlink}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.tlink}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
