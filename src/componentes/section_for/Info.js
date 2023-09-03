import react from "react";
import setup3d from "../../assets/imagens/setup3d.png";
import "./Info.css";
import "./InfoResponsivo.css";

const Info = () => {
    return(
        <section id="sectionFor">
            <div id="box_conteudo_section_four">
                <div id="coluna_conteudo" >
                    <div id="conteudo_info">
                        <h2>Localidade</h2>
                        <p>Não temos uma localização física. Nossa startup é livre geograficamente, o que nos possibilita grande expansão dos negócios.</p>
                    </div>
                </div>
                <div id="coluna_imagem" >
                    <img id="imagem_info" src={setup3d} width="850px" height="500px" />
                </div>
            </div>
            <div id="linha_degrade"></div>
        </section>
    )
}

export default Info;