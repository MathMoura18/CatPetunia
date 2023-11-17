import React from "react";
import './OngLayout.css';
import Elipse from "../../assets/icons/Ellipse.svg"
import Visão from "../../assets/icons/visão.svg"
import Valores from "../../assets/icons/valores.svg"
import Objetivo from "../../assets/icons/objetivo.svg"

function OngLayout() {
    return (
        <>
           <h1 className="titulo-ong">transparência<span>.</span></h1>
           <div className="bg-ong">
                <div className="listas-ong">
                    <div className="titulo-listas-ong"><img src={Objetivo} alt="objetivo" /> <h2>Nosso Objetivo:</h2></div>
                    <ul>
                        <li>
                            <img src={Elipse} alt="elipse"/> Resgatar gatos que se encontram abandonados e em situação de risco nas ruas da região metropolitana de São Paulo;
                        </li>
                        <li>
                            <img src={Elipse} alt="elipse"/> Preparar os animais resgatados para adoção responsável, fornecendo a eles carinho, proteção e todos os cuidados veterinários necessários, além de castração, vacinação e vermifugação;
                        </li>
                        <li>
                            <img src={Elipse} alt="elipse"/> Encontrar tutores responsáveis, que mantenham nossos protegidos dentro de um lar seguro e longe dos perigos das ruas, proporcionando a eles uma vida longa, digna e saudável.
                        </li>
                    </ul>
                    <div className="titulo-listas-ong"><img src={Visão} alt="visão" /> <h3>Nossa Visão:</h3></div>
                    <ul>
                        <li>
                            <img src={Elipse} alt="elipse"/> Ser uma ONG reconhecida por dar um tratamento digno aos gatos resgatados, encontrando lares amorosos, responsáveis e seguros para esses animais;
                        </li>
                        <li>
                            <img src={Elipse} alt="elipse"/> Contribuir com a construção de um mundo melhor, com menos animais sofrendo com o abandono e os maus tratos.
                        </li>
                    </ul>
                    <div className="titulo-listas-ong"><img src={Valores} alt="valores" /> <h4>Nossos Valores:</h4></div>
                    <ul>
                        <li>
                            <img src={Elipse} alt="elipse"/> Transparência em todas as ações e relações;
                        </li>
                        <li>
                            <img src={Elipse} alt="elipse"/> Responsabilidade, principalmente no cuidado com os animais e na escolha de seus tutores;
                        </li>
                        <li>
                            <img src={Elipse} alt="elipse"/> Respeito, amor, carinho e tratamento digno a todos os animais resgatados;
                        </li>
                        <li>
                            <img src={Elipse} alt="elipse"/> Repudio à violência ou qualquer forma de crueldade aos animais;
                        </li>
                    </ul>
                </div>
           </div>
        </>
    );
}

export default OngLayout;