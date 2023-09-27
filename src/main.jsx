import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Erro from './routes/Erro.jsx';
import Login from './routes/Login.jsx';
import Produtos from './routes/Produtos.jsx';
import Sobre from './routes/Sobre.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/sobre', element: <Sobre /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
