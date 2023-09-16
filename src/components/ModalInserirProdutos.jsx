import { useState } from "react";

export default function ModalInserirProdutos(props) {

  //Título da página
  document.title = "Cadastrar Produtos";

  //ID do produto sendo recebido por props
  const id = props.idProduto;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/produtos/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduto(data);
        });
    }
  }, [third])
  

  const [produto, setProduto] = useState({
  });

  return (
    <>
      ModalInserirProdutos
    </>
  )
}


//Campos que serão prenchidos
//ID-NOME-PREÇO-DESCRIÇÃO-IMG
