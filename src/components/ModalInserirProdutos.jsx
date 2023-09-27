import { useState, useEffect } from 'react';
import styles from '../css/ModalInsert.module.css';

export default function ModalInserirProdutos(props) {

  if(props.open){

  //Título da página
    document.title = 'Cadastrar Produtos';

  //ID do produto sendo recebido por props
  const fr = new FileReader();
  const [image, setImage] = useState();

  //Objeto de dados do produto:
  const [produto, setProduto] = useState({
    id: '',
    nome: '',
    preco: '',
    desc: '',
    img: image,
  });

  useEffect(() => {
    fetch(`http://localhost:5000/produtos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduto({ ...produto, ['id']: data[data.length - 1].id + 1 });
      })
      .catch((err) => console.log(err));
  }, []);

 

  //Função de preenchimento dos campos:
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "img") { 
      setProduto({...produto,[name]:value});
    }else{
      setProduto({...produto,[name]:value});
    }
}

const handleSubmit = (e) => {
  e.preventDefault();
    fetch(`http://localhost:5000/produtos`,{
        method: "POST",
        body: JSON.stringify(produto),
        headers: { "Content-Type":"application/json" } 
      })       
        .then((response) => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        
        //Encerrar o modal:
        props.setOpen(false);
}

  return (
    <>
      <div className={style.baseModal}>
        <h1>Cadastrar Produtos</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
        <button onClick={()=> props.setOpen(false)}>X</button>
            <legend>Informações do Produto</legend>
            <div>
              <label htmlFor="idNome">Nome:</label>
              <input
                type="text"
                id="idNome"
                name="nome"
                value={produto.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço:</label>
              <input
                type="number"
                id="idPreco"
                name="preco"
                value={produto.preco}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição:</label>
              <input
                type="text"
                id="idDesc"
                name="desc"
                value={produto.desc}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idImg">Imagem:</label>
              <input
                type="file"
                id="idImg"
                name="img"
                value={produto.img}
                onChange={handleChange}
              />
            </div>
            <div>
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="IMAGEM"
                  width="100px"
                />
              ) : (
                <img src="/novo-produto.png" alt="IMAGEM" width="100px" />
              )}
            </div>
            <div>
              <button>Cadastrar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
}

//Campos que serão prenchidos
//ID-NOME-PREÇO-DESCRIÇÃO-IMG
