import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import AdotePage from './pages/AdotePage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutusPage from './pages/AboutusPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/adote",
    element: <AdotePage></AdotePage>,
  },
  {
    path: "/aboutus",
    element: <AboutusPage></AboutusPage>,
  },
  {
    path: "/contact",
    element: <App></App>,
  },
  {
    path: "/contribua",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <App></App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)