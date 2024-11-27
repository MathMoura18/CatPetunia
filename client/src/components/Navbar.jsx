import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" id="logo">
            <Link to="CatPetunia/">
              <h1>
                <i class="fa-solid fa-shield-dog"></i>Cat Petúnia
              </h1>
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <ul class="nav nav-underline">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    <Link to="CatPetunia/">Home</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <Link to="CatPetunia/adote">Adote</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="CatPetunia/aboutus">Sobre nós</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="CatPetunia/contact">Contato</Link>
                  </a>
                </li>
                <li>
                  <button className="button-link">
                    <Link to="CatPetunia/contribua">
                      <a href="#">Contribua</a>
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="button-link">
                    <Link to="CatPetunia/login">
                      <a href="#">Login</a>
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
