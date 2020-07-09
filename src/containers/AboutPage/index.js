import React from "react";
import { AboutContainer, AboutTitle, AboutText,  ButtonCV } from "./style";


function AboutPage() {

    return (
        <div>
            <AboutContainer>
                <AboutTitle><b>Sobre Mim</b></AboutTitle>
                <AboutText>Bacharel em Comunicação Social com habilitação para
                Radio, Tv e Vídeo, Webdesigner e desenvolvedora Full Stack.
                Experiência com produção audiovisual, gestão de projetos para
                mídias sociais e desenvolvimento de sites, atualmente estudando
                linguagens de programação específicas citadas a baixo:
        <br />
        <br/>
                   <b> |Javascript  |Typescript   |MYSQL   |HTML   |CSS   |NodeJS  |REACT </b>
                 </AboutText>
                < ButtonCV><b>CV em PDF</b></ ButtonCV>
            </AboutContainer>
        </div>
    )
}

export default AboutPage