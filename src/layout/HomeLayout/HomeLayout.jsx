import React from "react";
import "./HomeLayout.css";
import "./HomeLayout.js";
import Carousel from "../../components/Carousel.jsx";
import cat2 from "../../assets/img/animais/cat2.jpg";
import dog1 from "../../assets/img/animais/dog1.jpg";
import dog3 from "../../assets/img/animais/dog3.jpg";
import { Link } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <div className="section1">
        <div className="section1-content">
          <h2>Adote!</h2>
          <p>
            Abra seu coração para um amiguinho de quatro patas! Adote um
            animalzinho na nossa ONG e faça o mundo deles e o seu brilharem de
            alegria. Junte-se a nós e espalhe amor peludo por aí!
          </p>
          <button className="button-link">
            <Link to="/adote">ADOTE AGORA</Link>
          </button>
        </div>
        <img src={cat2} alt="Gato sorrindo" id="section1-img"/>
      </div>
      <div className="section2">
        <h1>Casa do Vira Lata.</h1>
        <div class="section2-container">
          <div class="card">
            <div class="icon-card">
              <a href="">
                <span class="material-symbols-outlined">spa</span>
              </a>
            </div>
            <p>
              Confira aqui melhor sobre nossos <strong>valores</strong>.
            </p>
            <a href="">Veja mais</a>
          </div>
          <div class="card">
            <div class="icon-card">
              <a href="">
                <span class="material-symbols-outlined">visibility</span>
              </a>
            </div>
            <p>
              Confira aqui sobre nossa visão para o <strong>futuro</strong>.
            </p>
            <a href="">Veja mais</a>
          </div>
          <div class="card">
            <div class="icon-card">
              <a href="">
                <span class="material-symbols-outlined">check_circle</span>
              </a>
            </div>
            <p>
              Confira aqui sobre nossos <strong>objetivos</strong>.
            </p>
            <a href="">Veja mais</a>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="section3-container">
          <h2>
            <strong>
              amor pelos animais, amor pela vida<span>.</span>
            </strong>
          </h2>
          <p>
            Casa do Vira Lata é uma OSCIP sem fins lucrativos que ajuda centenas
            de gatos a encontrar um lar para viver.
          </p>
          <a href="">
            <Link to="/adote">Saiba Mais</Link>
          </a>
        </div>
        <img
          src={dog1}
          alt="Cachorro com pelos alaranjados em um campo"
          id="img"
          className="reveal"
        />
      </div>
      <div className="section4">
        <h1 class="text-title">
          <strong>
            depoimentos<span class="blue-point">.</span>
          </strong>
        </h1>
        <div class="section4-container">
          <div class="section4-text">
          <i class="fa-solid fa-quote-left"></i>
            <Carousel></Carousel>
            <i class="fa-solid fa-quote-right"></i>
          </div>
          <img
            src={dog3}
            alt="Foto de uma pessoa e seu cachorro abraçados na praia"
            class="img-section4"
          />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;