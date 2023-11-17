import React from "react";
import './ContatoLayout.css';
import Local from '../../assets/icons/local.svg';
import Email from '../../assets/icons/email.svg';
import Telefone from '../../assets/icons/telefone.svg';
import Mapa from '../../assets/img/sp1.jpg';

function ContatoLayout() {
    return (
        <>
            <h1 className="titulo-contato">nosso contato<span>.</span></h1>
            <div className="bg-contato">
                <div className="lista-contato">
                    <h2>Loja Local</h2>
                    <p><img src={Local} alt="local" />Rua Ali Perto, 40 - São Paulo</p>
                    <p><img src={Email} alt="email" />contato@catpetunia.com</p>
                    <p><img src={Telefone} alt="telefone" />+55 11 97777-7777</p>
                </div>
                <div className="form-contato">
                    <div className="forms">
                        <div className="form1">
                            <p>Nome</p>
                            <input type="text" placeholder="Seu Nome" required/>
                        </div>
                        <div className="form2">
                            <p>Telefone</p>
                            <input type="tel" placeholder="(11) 95555-5555" required/>
                        </div>
                    </div>
                    <div className="form3">
                        <p>Email</p>
                        <input type="email" placeholder="contato@email.com" required/>
                    </div>
                    <div className="form4">
                        <p>Mensagem</p>
                        <textarea cols="50" rows="10" wrap="hard" placeholder="O que você precisa?"></textarea>
                    </div>
                    <button className="botão-contato">ENVIAR MENSAGEM</button>
                </div>               
            </div>
            <div className="bg-contato2">
                <div className="local-contato">
                    <a href="https://www.google.com.br/maps/place/Funda%C3%A7%C3%A3o+Escola+de+Com%C3%A9rcio+%C3%80lvares+Penteado/@-23.5572299,-46.6395327,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59a8b4d648f9:0x862df06cefe8bc3e!8m2!3d-23.5572348!4d-46.6369578!16s%2Fg%2F122xff09?entry=ttu"><img src={Mapa} alt="mapa"/></a>
                    <h3>São Paulo</h3>
                    <div className="locais-contato">
                        <p>Rua ali perto, 35</p>
                        <p>São Paulo - SP</p>
                        <p>sp@catpetunia.com</p>
                        <p>11 97777-7777</p>
                    </div>
                    <p>08 - 18h de seg à sab</p>
                </div>
            </div>
        </>
    );
}

export default ContatoLayout;