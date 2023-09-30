import { useState, useEffect } from 'react';
import styles from '../css/ModalInsert.module.css';

export default function ModalInserirProdutos(props) {
  const [prodId, setProdId] = useState(props.produtoId);
  console.log(prodId);
  //Título da página
  if (prodId) {
    document.title = 'Editar Produto';
  } else {
    document.title = 'Cadastrar Produtos';
    console.log(prodId);
  }

  //ID do produto sendo recebido por props
  const fr = new FileReader();
  const [image, setImage] = useState();

  //Objeto de dados do produto:
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    desc: '',
    img: '',
  });

  //Definindo se é cadastro ou Edição
  let metodo = 'post';
  if (prodId) {
    metodo = 'put';
  }

  
  //Função de preenchimento dos campos:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  //Carrega as informações em caso de edição

  useEffect(() => {
    if (prodId != '') {
      fetch(`http://localhost:5000/produtos/${prodId}`)
        .then((resp) => resp.json())
        .then((resp) => setProduto(resp))
        .catch((error) => console.log(error));
    }
  }, [prodId]);

  const handleSubmit = (e) => {
    // console.log(produto);
    e.preventDefault();
    fetch(`http://localhost:5000/produtos/${prodId ? prodId : ''}`, {
      method: metodo,
      body: JSON.stringify(produto),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    //Encerrar o modal
    setProdId('')
    props.setOpen(false);
  };

  // const convertImgToBase64 = (e) =>{
    
  //   let arq1 = e.target.files;

  //   let fr = new FileReader();

  //   fr.readAsDataURL(arq1[0]);
  //   fr.onloa = () => {
  //     console.log(fr.result);
  //     setProduto({ ...produto, img: fr.result });
  //   }
  // };  

  return (
    <div className={styles.fundo}>
      <div className={styles.modInsert}>
        <h1 className={styles.tituloCadProd}>Cadastrar Produtos</h1>
        <form onSubmit={handleSubmit} className={styles.formProd}>
          <fieldset className={styles.fieldProd}>
            <span
              onClick={() => props.setOpen(false)}
              className={styles.btnFechar}
            >
              X
            </span>
            <legend className={styles.info}>Informações do Produto</legend>
            <div>
              <label htmlFor="idNome" className={styles.info}>
                Nome:
              </label>
              <input
                type="text"
                id="idNome"
                name="nome"
                value={produto.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idPreco" className={styles.info}>
                Preço:
              </label>
              <input
                type="number"
                id="idPreco"
                name="preco"
                value={produto.preco}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc" className={styles.info}>
                Descrição:
              </label>
              <input
                type="text"
                id="idDesc"
                name="desc"
                value={produto.desc}
                onChange={handleChange}
              />
            </div>
            {/* <div>
              <label htmlFor="idImg" className={styles.info}>
                Imagem:
              </label>
              <input
                type="file"
                id="idImg"
                name="img"
                value={produto.img}
                onChange={convertImgToBase64}
              />
            </div> */}
            {/* <div>
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="IMAGEM"
                  width="100px"
                />
              ) : (
                <img
                  src="/novo-produto.png"
                  alt="IMAGEM"
                  width="100px"
                  className={styles.img}
                />
              )}
            </div> */}
            <div>
              <button className={styles.btnCad}>Cadastrar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

//Campos que serão prenchidos
//ID-NOME-PREÇO-DESCRIÇÃO-IMG
