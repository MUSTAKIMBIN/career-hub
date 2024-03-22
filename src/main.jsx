import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import Statics from './components/Statics';
import ErrorElement from './components/ErrorElement';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      { 
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/statistics',
        element: <Statics></Statics>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
