import Nav from './components/Nav';
import Foot from './components/Foot';
import { Outlet } from 'react-router-dom';
import ModalInserirProdutos from './components/ModalInserirProdutos';

function App() {


  return (
    <>
      <Nav/>
        <Outlet/>
        <ModalInserirProdutos/>
      <Foot/>
    </>
  )
}

export default App
