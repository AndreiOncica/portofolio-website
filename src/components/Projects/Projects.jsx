import React from "react";
import styled from "styled-components";
import {
  Button,
  SectionTitle,
  SectionWrapper,
} from "../../assets/GlobalStyles";
import Card1Img from "../../assets/img/Project.jpg";
import Card2Img from "../../assets/img/MusicPage.jpg";
import Card3Img from "../../assets/img/Vouchers.jpg";
import Card4Img from "../../assets/img/corporate.jpg";

const ProjectCards = styled.div`
  display: grid;
  align-items: center;
  /* justify-content: center; */
  grid-template-areas:
    "SPACE CARD2"
    "CARD1 CARD2"
    "CARD1 CARD2"
    "CARD1 CARD4"
    "CARD3 CARD4"
    "CARD3 CARD4"
    "CARD3 CONTACT";
  row-gap: 3.45rem;
`;

const Card = styled.div`
  width: 337px;
  height: 384px;
`;

const Contact = styled.div`
  grid-area: CONTACT;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export default function Projects() {
  return (
    <section id="projects">
      <SectionWrapper display="flex" flexdirection="column" gap="3rem">
        <SectionTitle>projects</SectionTitle>
        <ProjectCards >
          <Card
            style={{ gridArea: "CARD1", backgroundImage: `url(${Card1Img})` }}
          ></Card>
          <Card
            style={{ gridArea: "CARD2", backgroundImage: `url(${Card2Img})` }}
          ></Card>
          <Card
            style={{ gridArea: "CARD3", backgroundImage: `url(${Card3Img})` }}
          ></Card>
          <Card
            style={{ gridArea: "CARD4", backgroundImage: `url(${Card4Img})` }}
          ></Card>
          <Contact>
            <div>Like my work?</div>
            <Button>Contact me</Button>
          </Contact>
        </ProjectCards>
      </SectionWrapper>
    </section>
  );
}
