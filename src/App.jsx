import Nav from './components/Nav';
import Foot from './components/Foot';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <>
      <Nav/>
        <Outlet/>
      <Foot/>
    </>
  )
}

export default App
