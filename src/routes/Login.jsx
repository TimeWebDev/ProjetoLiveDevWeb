import { useRef } from 'react';
import Produtos from './Produtos';
import styles from '../css/Login.module.css';

export default function Login() {
  const user = useRef();
  const password = useRef();

  const getUser = sessionStorage.getItem('userData');
  /* pegando o senha e adcionando ao sessionStorage */
  const getSenha = sessionStorage.getItem('senhaData');

  const handleSubmit = () => {
    if (user.current.value === 'Admin' && password.current.value === '12345') {
      //CRIANDO A AUTENTICAÇÃO USANDO O TOKEN
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'Admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };

  return (
    <section className={styles.login}>
      <h1 className={styles.titulo}>Login</h1>
      {/* if ternario*/}
      {getUser && getSenha ? (
        <Produtos />
      ) : (
        /* chamando a função handleSubmit dentro do form*/
        <form onSubmit={handleSubmit} className={styles.frmLogin}>
          <p className={styles.user}>
            <label htmlFor="usuario">USUÁRIO:</label>
            {/* passando a referencia no usuario */}
            <input type="text" id={styles.userInput} ref={user} />
          </p>

          <p className={styles.senha}>
            <label htmlFor="senha">SENHA:</label>
            {/* passando a referencia na senha */}
            <input type="password" id={styles.senhaInput} ref={password} />
          </p>
          <input type="submit" value="LOGIN" id={styles.btnCadastrar} />
        </form>
      )}
    </section>
  );
}
