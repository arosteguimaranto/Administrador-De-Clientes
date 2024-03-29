import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { EditarCliente, loader as editarClienteLoader, action as EditarClienteAction, action} from './pages/EditarCliente'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { NuevoCliente, action as nuevoClienteAction } from './pages/NuevoCliente'
import { Index, loader as clientesLoader } from './pages/Index'
import { ErrorPage } from './components/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        errorElement: <ErrorPage />,
        action: EditarClienteAction
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
