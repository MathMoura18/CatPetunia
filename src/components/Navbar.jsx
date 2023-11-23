import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" id="logo">
          <h1><Link to="/">Casa do Vira Lata</Link></h1> 
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
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/adote">Adote</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/aboutus">Sobre nós</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/contact">Contato</Link>
                </a>
              </li>
              <li>
                <button className="button-link">
                  <a href="/contribua">Contribua</a>
                </button>
              </li>
              <li>
                <button className="button-link">
                  <Link to="/login"><a href="#">Login</a></Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
