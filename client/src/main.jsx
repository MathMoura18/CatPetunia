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
        path: "CatPetunia/",
        element: <Home />,
      },
      {
        path: "CatPetunia/adote",
        element: <AdotePage />,
      },
      {
        path: "CatPetunia/aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "CatPetunia/contact",
        element: <ContatoPage />,
      },
      {
        path: "CatPetunia/contribua",
        element: <DoarPage />,
      },
      {
        path: "CatPetunia/login",
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