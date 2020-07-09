import React from "react";
import { Container, Title, TitleText, Text, LeftContainer, RightContainer, CenterContanier } from "./style";


function EducationPage() {

    return (
        <div>
            <Container>
                <LeftContainer>
                    <TitleText>Curso de Web Full Stack<br />na Labenu</TitleText>
                    <Text>Desenvolvimento de aplicações web utilizando <br />HTML, CSS, JavaScript,
                        NodeJs, Typescript e MySQL.<br />
                        Criação de sites responsivos
                  </Text>
                </LeftContainer>
                <CenterContanier>
                <Title>Educação</Title>
                    <TitleText>Bacharel em Radio TV e Internet<br />na FMU - FIAM FAAM</TitleText>
                    <Text> Curso de formação superior em Comunicação Social com Habilitação em Radio, Tv e Internet.
                  </Text>
                </CenterContanier>
                <RightContainer>
                    <TitleText>Curso de Web Design<br /> na SOS Cursos Profissionalizantes</TitleText>
                    <Text>Desenvolvimento de documentos comerciais com Microsoft Word, Excel, PowerPoint, aplicações do Google e Outlook.<br />
                      Criação de conteúdos para web com Photoshop, Illustrator e Adobe Premiere.
                  </Text>
                </RightContainer>
            </Container>
        </div>
    )
}

export default EducationPage