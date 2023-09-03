import React from "react";
import "./Card.css";

const Card = (props) => {
    return(
        <div class="card" style={{width: "18rem",margin:"30px 30px 5px 30px"}}>
        <img src={props.imagem} style={{maxHeight:"180px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.titulo}</h5>
                <p class="card-text">{props.conteudo}</p>
                <a href="#" class={props.corBotao} style={{display:"block",padding:"10px",fontSize:"20px"}}>{props.botao}</a>
            </div>
        </div>
    )
}

export default Card;