import React from "react";
import "./AboutusLayout.css";
import fotodiv1 from "../../assets/cat1.jpg";
import fotodiv2 from "../../assets/cat2.jpg"


function AboutusLayout() {
    return (

        <div className="container">
            <h1 className="top-h1">Como surgimos<span>?</span></h1>
            <div className="top-about">
                <p>Fundada em 2012, a CatPetunia é uma ONG (Organização Não Governamental) que tem como objetivo sensibilizar a sociedade sobre a guarda animal responsável, colaborar com o controle populacional dos gatos de rua e encontrar lares responsáveis para o maior número possível deles. Para manter-se em funcionamento, a CatPetunia conta somente com doações da comunidade e parcerias com empresas que visam colaborar com a causa. Entretanto, os custos mensais dificilmente são cobertos por esses valores e as despesas com aluguel, alimentação, limpeza e cuidados veterinários, entre outros, aumentam a cada dia.</p>
                <img src={fotodiv1} className="abt-top-img" />

            </div>
            <br />
            <h2 className="middle-h2">O que fazemos<span>?</span></h2>
            <div className="middle-about">
                <p>A CatPetunia já atendeu mais de 6.500 gatos em situação de abandono e busca por meio de ações efetivas, como castração solidária, palestras, resgates e adoção, contribuir para a construção de um mundo melhor.</p>
                <img src={fotodiv2} className="middle-img" />
            </div>
            <br />

            <h2 className="bottom-h2">Equipe<span>.</span></h2>
            <div className="bottom-about">
                <p>Formada por cerca de 80 voluntários; cuja maioria trabalha em empresas de diversos setores, bem como em órgãos públicos, e dedica o tempo livre para cuidar dos gatinhos; a Gatópoles não conta com o apoio de nenhuma empresa e nem do governo e depende de doações feitas por simpatizantes da causa animal.</p>
                <p><span>"</span>  Nosso trabalho é feito com muita transparência e por isso todo o dinheiro recebido, bem como os gastos do projeto, são divulgados em nosso site<span>"</span></p>
                <img src={fotodiv1} className="bottom-img" />
            </div>
            <br />














        </div>
    );
}
export default AboutusLayout;