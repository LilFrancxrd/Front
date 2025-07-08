import { createBrowserRouter } from 'react-router-dom'

import Home from './views/Home'
import Categorias from './views/Categorias'


import Layout from './layouts/Layout'
import Login from './views/Login'
import Vehiculos from './views/Vehiculos'
import CrearUsuario from './views/CrearUsuario'
import ArriendosActivos from './views/ArriendosActivos'
import ArriendosTerminados from './views/ArriendosTerminados'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
                path:'login',
				element: <Login />,
			},
            {
                path:'home',
                element:<Home/>
            },
			{
				path: 'categorias',
				element: <Categorias />,

			},
			{
				path: 'vehiculos',
				element: <Vehiculos />,

			},
            {
                path:'crearusuario',
                element: <CrearUsuario/>
            },
			{
				path:'registrardevolucion',
				element: <ArriendosActivos/>
			},
			{
				path:'arriendos/terminados',
				element: <ArriendosTerminados/>
			}

		],
	},
])