import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AdotePage from './routes/AdotePage.jsx';
import ContatoPage from './routes/ContatoPage.jsx';
import DoarPage from './routes/DoarPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import Home from './routes/Home.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import AboutUsPage from './routes/AboutusPage.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "adote",
        element: <AdotePage />,
      },
      {
        path: "aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "contact",
        element: <ContatoPage />,
      },
      {
        path: "contribua",
        element: <DoarPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)