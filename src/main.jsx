import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Layout from './Components/Layout';
import NuevoCliente, {action as actionNuevoCliente} from './pages/NuevoCliente';
import Index, {loader as clientesLoader} from './pages/Index';
import EditarCliente, {loader as editarLoader, action as editarClienteAction} from './pages/EditarCliente'
import {action as eliminarClienteAction} from "./Components/Cliente"

import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: actionNuevoCliente
      },
      {
        path: "/clientes/:id/editar",
        element: <EditarCliente />, 
        loader: editarLoader, 
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/:id/eliminar",
        action: eliminarClienteAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
