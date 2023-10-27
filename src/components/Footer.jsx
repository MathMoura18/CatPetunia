import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <h2>
          <a href="#logo">Casa do Vira Lata</a>
        </h2>
        <p>© 2023 - Todos os direitos reservados</p>
        <p>Desenvolvido por <a href="" id="href-authors">Matheus Moura</a>, <a href="" id="href-authors">Yago Kawauchi</a>, <a href="" id="href-authors">João Vitor Leão</a> e <a href="" id="href-authors">Vitor Locateli</a>.</p>
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
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/adote">ADOTE</Link>
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
