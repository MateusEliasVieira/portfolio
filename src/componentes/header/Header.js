import React from "react";
import './Header.css'
import './HeaderResponsivo.css'

import perfil from  "../../assets/imagens/perfil.webp";

const header = () => {
    return(
       <div id="header">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">DevSoft</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">

                        <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" >

                            <li class="nav-item" role="presentation">
                                <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Início</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Serviços</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contato</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Sobre</button>
                            </li>
                        </ul>

                    </div>
            </nav>

            <div id="conteudo_header">

                <div id="introducao">
                    <div> 
                        <div>
                            <h1>Soluções em Tecnologia</h1>             
                            <h2 id="ponto"></h2>
                        </div>      
                        <p>A melhor <div>startup</div> em soluções tecnológicas para o seu negócio se encontra aqui!</p>
                        <button type="button" class="btn btn-primary" style={{display:"block",padding:"10px",fontSize:"20px"}}>Tenho Interesse</button>
                    </div>
                    <img id="img_computador" src={perfil}/>
                </div>

            </div>
            <div id="linha"></div>
        </div>
    )
}

export default header;