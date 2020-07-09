import React from "react";
import {Container, Title, TitleText, Text, LeftContainer, RightContainer} from "./style";


function CompetencePage() {

    return (
        <div>
            <Container>
                <Title>Meus Conhecimentos em Programação</Title>
                <LeftContainer>
                  <TitleText>Front-end</TitleText>
                  <Text>Desenvolvimento de aplicações web utilizando <br/>HTML, CSS e JavaScript.<br/>
                      Criação de sites responsivos
                  </Text>
                  </LeftContainer>

                  <RightContainer>
                  <TitleText>Back-end</TitleText>
                  <Text>Aplicações utilizando NodeJs, Typescript e MySQL.<br/>
                      Criação de API's para comunicação com front-end
                      seguindo <br/>princípio de Clean Code.
                  </Text>
                  </RightContainer>
            </Container>
        </div>
    )
}

export default CompetencePage