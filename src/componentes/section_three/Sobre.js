import React from "react";
import "./Sobre.css";
import foto from '../../assets/imagens/foto.jpg';

const Sobre = () => {
    return(
        <section id="sectionThree">
            <div>
                <div id="circulo_foto">
                    <img src={foto} width="250px" style={{borderRadius:"50%"}}/>
                </div>
                <p id="sobre_autor">
                    Meu nome é Mateus, tenho 23 anos e sou desenvolvedor mobile e web fullstack. Sou formado em técnico de redes de computadores e graduado em sistemas de informação. Sou apaixonado por tecnologia e busco sempre aprender coisas novas, e foi em um dia qualquer que criei a startup Devtech, onde iniciei minha própria startup de soluções tecnológicas.
                </p>
            </div>
        </section>
    )
}

export default Sobre;