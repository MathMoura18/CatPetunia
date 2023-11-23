import React from "react";
import './AdoteLayout.css';
import GatoAdote from "../../assets/img/animais/cat1.jpg";
import SvgFugas from "../../assets/icons/corrida.svg";
import SvgCarteira from "../../assets/icons/carteira.svg";
import SvgMapa from "../../assets/icons/mapa.svg";
import SvgDescrição from "../../assets/icons/descrição.svg";


function AdoteLayout() {
  return (
    <>
      <h1 className="titulo-adote">
        adote um gatinho<span>.</span>
      </h1>
      <p className="subtitulo-adote">
        Tudo o que você precisa saber para adotar
      </p>
      <ul className="conteudo-adote">
        <li>
          <img src={SvgFugas} alt="svg fugas" />
          <h2>Proteger rotas de saídas e de fuga</h2>
          <p>
            Apartamentos e casas precisam ter redes de proteção em todas as
            janelas, vitrôs, basculantes, sacadas e portões para impedir o
            acesso do gatinho a rua ou telhados. Lembre-se que isso precisa ser
            feito antes da chegada do gatinho.{" "}
          </p>
        </li>
        <li>
          <img src={SvgCarteira} alt="svg carteira" />
          <h2>Ter condições financeiras</h2>
          <p>
            Este ponto é de extrema importância para garantir a qualidade de
            vida do gatinho: é preciso ter condições financeiras para arcar com
            ração de boa qualidade, vacinas e consultas regulares com
            veterinário.
          </p>
        </li>
        <li>
          <img src={SvgMapa} alt="svg mapa" />
          <h2>Morar em São Paulo</h2>
          <p>
            É preciso morar na cidade de São Paulo, no ABC (Santo André, São
            Bernardo e São Caetano) ou arredores.
          </p>
        </li>
        <li>
          <img src={SvgDescrição} alt="svg descrição" />
          <h2>Termo de Responsabilidade</h2>
          <p>
            Não é preciso pagar nada para adotar, mas você vai assinar um termo
            de responsabilidade, comprometendo-se a não doar o resgatinho para
            terceiros sem consentimento e zelar por sua saúde e segurança.
          </p>
        </li>
      </ul>
      <p className="subtitulo-adote">Gatos disponíveis para adoção</p>
      <div className="gatos-adote">
        <ul className="gatoslista-adote">
          <li>
            <img src={GatoAdote} alt="gato" />
            <h3>Pipoca</h3>
            <p>
              Olá, tudo bem? Sou o Pipoca, prazer em te conhecer! Como podem
              perceber, sou um gatinho elegante ...
            </p>
          </li>
          <li>
            <img src={GatoAdote} alt="gato" />
            <h3>Pipoca</h3>
            <p>
              Olá, tudo bem? Sou o Pipoca, prazer em te conhecer! Como podem
              perceber, sou um gatinho elegante ...
            </p>
          </li>
          <li>
            <img src={GatoAdote} alt="gato" />
            <h3>Pipoca</h3>
            <p>
              Olá, tudo bem? Sou o Pipoca, prazer em te conhecer! Como podem
              perceber, sou um gatinho elegante ...
            </p>
          </li>
          <li>
            <img src={GatoAdote} alt="gato" />
            <h3>Pipoca</h3>
            <p>
              Olá, tudo bem? Sou o Pipoca, prazer em te conhecer! Como podem
              perceber, sou um gatinho elegante ...
            </p>
          </li>
          <li>
            <img src={GatoAdote} alt="gato" />
            <h3>Pipoca</h3>
            <p>
              Olá, tudo bem? Sou o Pipoca, prazer em te conhecer! Como podem
              perceber, sou um gatinho elegante ...
            </p>
          </li>
          <li>
            <img src={GatoAdote} alt="gato" />
            <h3>Pipoca</h3>
            <p>
              Olá, tudo bem? Sou o Pipoca, prazer em te conhecer! Como podem
              perceber, sou um gatinho elegante ...
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AdoteLayout;
