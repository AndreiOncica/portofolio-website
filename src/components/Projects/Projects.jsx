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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card = styled.a`
  width: 335px;
  height: 384px;

  @media screen and (max-width: 768px) {
    /* width: 100%; */
    background-repeat: no-repeat;
  }
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
        <ProjectCards>
          <Card href="https://avstore.ro/sennheiser" style={{ backgroundImage: `url(${Card1Img})` }}></Card>
          <Card href="https://avstore.ro/music" style={{ backgroundImage: `url(${Card2Img})` }}></Card>
          <Card href="https://avstore.ro/vouchere-cadou" style={{ backgroundImage: `url(${Card3Img})` }}></Card>
          <Card href="https://avstore.ro/corporate" style={{ backgroundImage: `url(${Card4Img})` }}></Card>
        </ProjectCards>
        <Contact>
          <div>Like my work?</div>
          <Button>Contact me</Button>
        </Contact>
      </SectionWrapper>
    </section>
  );
}
