import React from "react";
import styled from "styled-components";
import { color, SectionWrapper, Button } from "../../assets/GlobalStyles";
import SocialIcons from "./SocialIcons";

const MainSection = styled.div`
  background-color: ${color.primary};
`;

const MainText = styled.div`
  & h4,
  h5 {
    font-size: 36px;
    font-weight: 400;
  }

  & h1 {
    font-size: 90px;
  }

  @media screen and (max-width: 768px) {
    & h4,
    h5 {
      font-size: 28px;
    }
    & h1 {
      font-size: 72px;
    }
  }
`;

const MainButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export default function Main() {
  return (
    <MainSection id="home">
      <SectionWrapper
        display="flex"
        flexdirection="column"
        justifycontent="center"
        gap="4rem"
        height="100vh"
        style={{ zIndex: 500, position: "relative" }}
      >
        <MainText>
          <h5>Hello!</h5>
          <h1>I am Andrei Oncica</h1>
          <h4>A frontend developer based in Romania</h4>
        </MainText>
        <MainButtons>
          <a href="#about">
            <Button>My story</Button>
          </a>
          <SocialIcons />
        </MainButtons>
      </SectionWrapper>
    </MainSection>
  );
}
