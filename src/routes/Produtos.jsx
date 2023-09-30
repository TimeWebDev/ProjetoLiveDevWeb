import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from '../css/Produtos.module.css';
import ModalInserirProdutos from '../components/ModalInserirProdutos';


export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [open, setOpen] = useState(false);

  

  useEffect(() => {
    if(!open){
      fetch('http://localhost:5000/produtos')
        .then((resp) => resp.json())
        .then((resp) => setProdutos(resp))
        .catch((error) => console.log(error))
    }

  }, [open]);

  
  const handleDelete = (id) => {
    fetch('http://localhost:5000/produtos/' + id, { method: 'delete' })
      .then(() => (window.location = '/produtos'))
      .catch((error) => console.log(error));
  };

  const [produtoId, setProdutoId]=useState('')
  const handleEdit = (prod)=>{
    setProdutoId(prod)     
    setOpen(true)      
  }

  return (
    <div className={styles.produto}>
       <button onClick={() => setOpen(true)} className={styles.button}>Cadastrar Jogo</button>
      <h1 className={styles.tituloProduto}>Lista de Jogos</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Editar / Excluir</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((prod) => (
            <tr key={prod.id}>
              <td><img src={prod.img} alt="" /> </td>
              <td>{prod.nome}</td>
              <td>{prod.desc}</td>
              <td>{prod.preco}</td>
              <td>
                <button className='editar' onClick={handleEdit.bind(this, prod.id)}>
                  Editar
                  </button>
                <button className='deletar' onClick={handleDelete.bind(this, prod.id)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">Lista de Jogos em promoção!!!</td>
          </tr>
        </tfoot>
      </table>
      {open ? <ModalInserirProdutos open={open} setOpen={setOpen} produtoId={produtoId}/> : ''}
      
    </div>
  );
}
