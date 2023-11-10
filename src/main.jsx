import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import AdotePage from './pages/AdotePage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';
import DoarPage from './pages/DoarPage.jsx';
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
    element: <App></App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)