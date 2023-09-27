import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ModalInserirProdutos from '../components/ModalInserirProdutos';

export default function Produtos() {


  const [produtos, setProdutos]= useState([]);

  //state controlador da abertura do modal de inserir produtos:
  const [open, setOpen] = useState(false);

  useEffect(
    ()=>{
      fetch("http://localhost:5000/produtos")
        .then(resp => resp.json())
        .then(resp => setProdutos(resp))
        .catch( error => console.log(error))
    },[]
  )

  const handleDelete = (id)=>{
    fetch("http://localhost:5000/produtos/"+id,{ method:"delete"})
      .then(()=> window.location = '/produtos')
      .catch( error => console.log(error))
  }

  return (
    <div>
      <h1>Lista de Jogos</h1>

      <Link onClick={()=> setOpen(true)}>Cadastrar Novo Game</Link>
      {open ? <ModalInserirProdutos open={open} setOpen={setOpen}/> : ''}
      <table>
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
          {
            produtos.map(prod => (
              <tr key={prod.id}>
                  <td><img src={prod.img} alt=""/></td>
                  <td>{prod.nome}</td>
                  <td>{prod.desc}</td>
                  <td>{prod.preco}</td>
                  <td>
                    {/* <Link to={`/editar/${prod.id}`}>Editar</Link> */}
                    <button onClick={handleDelete.bind(this, prod.id)}>Deletar</button>
                  </td>
              </tr>
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">Lista de Jogos em promoção!!!</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
