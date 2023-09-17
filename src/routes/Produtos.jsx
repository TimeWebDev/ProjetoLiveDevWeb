import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export default function Produtos() {


  const [produtos, setProdutos]= useState([])

  useEffect(
    ()=>{
      fetch("http://localhost:5000/produtos")
        .then(resp => resp.json())
        .then(resp => setProdutos(resp))
        .catch( error => console.log(error))
    },[]
  )

  const handleDelete = (id)=>{
    
  }


  return (
    <div>
      <h1>Lista de Jogos</h1>

      <Link to="/cadastrar">Adicionar novo jogo.</Link>

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
                  <td>{prod.img}</td>
                  <td>{prod.nome}</td>
                  <td>{prod.desc}</td>
                  <td>{prod.preco}</td>
                  <td>
                    {/* <Link to={`/editar/${prod.id}`}>Editar</Link>
                    <button onClick={handleDelete.bind(this, prod.id)}>Deletar</button> */}
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
