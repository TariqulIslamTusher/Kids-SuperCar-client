import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainOutlet from './components/MainOutlet.jsx/MainOutlet';
import Home from './components/Home.jsx/Home';
import Login from './components/loginRegistration/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Register from './components/loginRegistration/Register';
import AddToys from './components/Toys/AddToys';
import AllToys from './components/Toys/AllToys/AllToys';
import MyToys from './components/Toys/MyToys/MyToys';
import Blogs from './components/Pages/Blogs';
import PrivateRoutes from './components/Pages/PrivateRoutes/PrivateRoutes';
import ViewDetails from './components/Toys/ViewDetails/ViewDetails';
import ErrorPage from './components/Pages/ErrorPage';
import OwnViewDetails from './components/Toys/ViewDetails/ownViewDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet></MainOutlet>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addToys",
        element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://toy-market-place-server-eight.vercel.app/products/${params.id}`)
      },
      {
        path: '/ownViewDetails/:id',
        element: <PrivateRoutes><OwnViewDetails></OwnViewDetails></PrivateRoutes>
       
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>
      },
      {
        path: "/myToys",
        element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
