import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Layout/Home/Home.jsx';
import Login from './Layout/Log/Login.jsx';
import Signup from './Layout/Log/Signup.jsx';
import AuthProvider from './Layout/Auth/AuthProvider.jsx';
import CardInfo from './Components/Work/CardInfo.jsx';
import Booking from './Components/Booking/Booking.jsx';
import Router from './Router/Router.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login/>,
      },
      {
        path: "/signUp",
        element: <Signup/>,
      },
      {
        path: "/cardInfo/:id",
        element: <Router><CardInfo/></Router>,
        loader: ({params})=> fetch(`http://localhost:5000/allData/${params.id}`)
      },
      {
        path: "/booking",
        element: <Router><Booking/></Router>,
       
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl	 mx-auto'>
    <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
