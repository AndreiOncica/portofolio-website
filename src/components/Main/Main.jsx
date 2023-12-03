import React from "react";
import styled from "styled-components";
import { color, SectionWrapper, Button } from "../../assets/GlobalStyles";
import SocialIcons from './SocialIcons'

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
`;

const MainButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      >
        <MainText>
          <h5>Hello!</h5>
          <h1>I am Andrei Oncica</h1>
          <h4>A frontend developer based in Romania</h4>
        </MainText>
        <MainButtons>
          <Button>My story</Button>
          <SocialIcons />
        </MainButtons>
      </SectionWrapper>
    </MainSection>
  );
}
