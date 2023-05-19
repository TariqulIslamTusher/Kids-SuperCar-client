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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet></MainOutlet>,
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
        element: <AddToys></AddToys>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>
      },
      {
        path: "/myToys",
        element:<MyToys></MyToys>
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
