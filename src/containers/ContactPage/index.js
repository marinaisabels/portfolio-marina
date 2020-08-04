import React from "react";

import { Title, Text, Container, ContactIcons, Footer } from "./style";




function ContactPage() {

    return (
        <div>
            <Container id="ContactPage">
                <Title>Contato</Title>
                <Text>Procuro oportunidade de trabalho onde eu possa aprender,<br/>
                me desenvolver e evoluir na minha carreira profissional.
                </Text>
                <br/>
                <Text>E-mail para contato: marinaisabels@live.com <br/>
                Celular: (11)99433-2311
                </Text>
                <br/>
                <ContactIcons>
                    <a href="https://www.linkedin.com/in/marinaisabel/"><img src={require("../../images/group-10-copy.png")} alt="Linkedin" style={{ padding: '12px'}} /></a>
                    <a href="https://github.com/marinaisabels"><img src={require("../../images/fill-1-copy.png")} alt="GitHub" style={{ padding: '12px'}} /></a>
                    <a href="https://instagram.com/marina_iza"><img src={require("../../images/group-8-copy.png")} alt="Istagram" style={{ padding: '12px'}} /></a>
                </ContactIcons>
            </Container>
            <Footer>
                <p>© 2020 - Criado por Marina Isabel</p>
            </Footer>
        </div>
    )
}

export default ContactPage