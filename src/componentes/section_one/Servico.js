import React from "react";
import './Servico.css';
import Card from "../card/Card";
import slide1 from "../../assets/imagens/android.png";
import slide2 from "../../assets/imagens/sistema-web.jpg";
import slide3 from "../../assets/imagens/manutencao.jpg";

const Servico = () => {
    return(
        <section id="sectionOne">
            <Card 
                titulo="Aplicativos" 
                conteudo="Oferecemos soluções por meio de aplicativos mobile, dessa forma todo o controle de sua empresa estará literalmente nas palmas das mãos." 
                imagem={slide1} 
                botao="Quero meu aplicativo!"
                corBotao="btn btn-success"/>
            <Card 
                titulo="Sistemas Web" 
                conteudo="Oferecemos soluções por meio de sistemas web, dessa forma seu negócio pode ser acessado pelo mundo inteiro. " 
                imagem={slide2} 
                botao="Quero meu sistema web!"
                corBotao="btn btn-warning"/>
            <Card 
                titulo="Manutenção" 
                conteudo="Oferecemos mão de obra 100% profissional para correção e manutenção preventiva de computadores e notebooks" 
                imagem={slide3} 
                botao="Quero concertar meu pc!"
                corBotao="btn btn-danger"/>
                
        </section>
    )
}

export default Servico;