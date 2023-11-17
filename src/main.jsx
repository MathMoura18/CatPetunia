import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import AdotePage from './pages/AdotePage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';
import DoarPage from './pages/DoarPage.jsx';
import OngPage from './pages/OngPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    path: "/ong",
    element: <OngPage></OngPage>,
  },
  {
    path: "/aboutus",
    element: <App></App>,
  },
  {
    path: "/contact",
    element: <ContatoPage></ContatoPage>,
  },
  {
    path: "/contribua",
    element: <DoarPage></DoarPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)