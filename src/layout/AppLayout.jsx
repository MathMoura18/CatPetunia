import React from "react";
import Carousel from "../components/Carousel";
import cat2 from "../assets/cat2.jpg";
import { Link } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <div className="main1">
        <div className="main1-content">
          <h2>Adote!</h2>
          <p>
            Abra seu coração para um amiguinho de quatro patas! Adote um
            animalzinho na nossa ONG e faça o mundo deles e o seu brilharem de
            alegria. Junte-se a nós e espalhe amor peludo por aí!
          </p>
          <button>
            <Link to="/adote">ADOTE AGORA</Link>
          </button>
        </div>
        <img src={cat2} alt="Gato sorrindo" id="main1-img" />
      </div>
      <Carousel></Carousel>
    </>
  );
}

export default AppLayout;