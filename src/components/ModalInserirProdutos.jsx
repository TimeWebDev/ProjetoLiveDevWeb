import { useState, useEffect } from 'react';
import styles from '../css/ModalInsert.module.css';

export default function ModalInserirProdutos(props) {

  let prodId = props.produtoId
  const [listaProdutos, setListaProdutos]=useState([])


  if(props.open){

  //Título da página
    if(prodId){
      document.title = 'Editar Produto';
    }else{
      document.title = 'Cadastrar Produtos';
    }

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

  
 
  //Definindo se é cadastro ou Edição
  let metodo = 'post'
  if(prodId){
    metodo = 'put'
  }

  //Função de preenchimento dos campos:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };


  //Carrega as informações em caso de edição
  useEffect(()=>{     
        fetch(`http://localhost:5000/produtos/${prodId}`)
      .then((resp) => resp.json())
      .then((resp) => setProduto(resp))
      .catch((error) => console.log(error));
  },[prodId])


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/produtos/${prodId ? prodId : ""}`, {
      method: metodo,
      body: JSON.stringify(produto),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    //Encerrar o modal
    props.setOpen(false);
  };

  const inserirImagem = (e)=>{
    setImage(e.target.files[0])
    setProduto({ ...produto, img: image });    
  }

  return (
    <div className={styles.fundo}>
      <div className={styles.modInsert}>
        <h1>
        {
          prodId ? 'Editar Produto' : 'Cadastrar Produtos'
        }
        </h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
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
                onChange={inserirImagem}
                // onChange={(e) => setImage(e.target.files[0])}
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
    </div>
  );
}
}

//Campos que serão prenchidos
//ID-NOME-PREÇO-DESCRIÇÃO-IMG
