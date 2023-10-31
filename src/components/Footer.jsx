import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <h2>
          <Link to="/"><a href="#">Casa do Vira Lata</a></Link>
        </h2>
        <p>&copy;{new Date().getFullYear()} Casa do Vira Lata</p>
        <p>Desenvolvido por <a href="https://github.com/MathMoura18" id="href-authors" target="blank">Matheus Moura</a>, <a href="https://github.com/yfk7" id="href-authors" target="blank">Yago Kawauchi</a>, <a href="https://github.com/JoaoVitorLB" id="href-authors" target="blank">João Vitor Leão</a> e <a href="https://github.com/vitorlocateli" id="href-authors" target="blank">Vitor Locateli</a>.</p>
      </div>
      <div className="social-links">
        <ul>
          <h2>
            <strong>CONTATO</strong>
          </h2>
          <li>
            <a href="tel:+5511999999999">(11) 99999-9999</a>
          </li>
          <li>
            <a href="mailto:contato@casadoviralata.com.br">
              contato@casadoviralata.com.br
            </a>
          </li>
          <li>
            <p>
              Rua (...), 40 - .....(CEP) <br />
              São Paulo - SP
            </p>
          </li>
        </ul>
      </div>
      <div className="footer-nav">
      <ul>
        <h2>
          <strong>NAVEGUE</strong>
        </h2>
          <li>
            <Link to="/"><a href="#logo">HOME</a></Link>
          </li>
          <li>
            <Link to="/adote"><a href="#logo">ADOTE</a></Link>
          </li>
          <li>
            <Link to="/aboutus">SOBRE NÓS</Link>
          </li>
          <li>
            <Link to="/contact">CONTATO</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
