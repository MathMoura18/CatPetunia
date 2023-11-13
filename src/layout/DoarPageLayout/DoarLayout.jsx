import React from "react";
import './DoarLayout.css';
import GatoCard1 from "../.././assets/img/animais/gato-doarpage.jpg";
import GatoCard2 from "../.././assets/img/animais/gato2-doarpage.jpg";
import GatoCard3 from "../.././assets/img/gato3-doarpage.jpg";

function DoarLayout() {
    return (
        <>
           <h1 className="titulo-doar">como ajudar a ong<span>.</span></h1>
           <div className="bg-doar">
                <div className="card1-doar">
                    <div className="gato1-doar">
                        <img src={GatoCard1} alt="gato card1"/>
                    </div>
                    <div className="texto1-doar">
                        <h2>Adote um amor<span>.</span></h2>
                        <p>A adoção é um ato de amor e responsabilidade. Para adotar, basta se comprometer com um bichinho que dependerá sempre de você e cuidar dele, dando afeto e um lar seguro. O amor é uma obrigação para adotar um coração.</p>
                        <button>QUERO ADOTAR</button>
                    </div>
                </div>
                <div className="card2-doar">
                    <div className="gato1-doar">
                        <img src={GatoCard2} alt="gato card2"/>
                    </div>
                    <div className="texto2-doar">
                        <h2>Faça uma doação<span>.</span></h2>
                        <p>A doação, mensal ou não, de qualquer valor, ajuda nossa causa a fazer o impossível tornar-se realidade. Com a sua contribuição monetária, levamos esperança e cuidado para os animais e protetores que mais precisam.</p>
                        <button>QUERO DOAR</button>
                    </div>
                </div>
                <div className="card3-doar">
                    <div className="gato1-doar">
                        <img src={GatoCard3} alt="gato card3"/>
                    </div>
                    <div className="texto3-doar">
                        <h2>seja um parceiro<span>.</span></h2>
                        <p>A CatPetunia está aberta a parcerias de empresas, indústrias e profissionais autônomos.Caso esteja interessado em ser nosso parceiro, escreva para contato@catpetunia.com.br.</p>
                        <button>QUERO SER PARCEIRO</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DoarLayout;