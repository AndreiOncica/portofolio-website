import React from "react";
import styled from 'styled-components'
import {color, SectionWrapper, Button, SectionTitle } from "../../assets/GlobalStyles";

const Slogan = styled.div`
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 1rem;

    & span {
        color: ${color.accent};
    }
`

const Text = styled.p`
    font-size: 22px;
    font-weight: 400;
`

const AboutContact = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div:first-child {
        font-size: 28px;

        & div:last-child {
            color: ${color.accent};
            font-weight: bold;
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      flex-direction: column;
      gap: 1rem;
    }
`

export default function About() {
  return (
    <section id="about">
      <SectionWrapper display="flex" flexdirection="column" gap="2rem">
        <SectionTitle>story</SectionTitle>
        <div  style={{zIndex: 5000}}>
          <Slogan>
            Designing Tomorrow. <span>Today.</span>
          </Slogan>
          <Text>
            I embarked on my web development journey in January 2022, fueled by
            a genuine passion for crafting digital experiences. Eager to learn
            and dedicated to mastering the intricacies of coding, I am on a
            mission to transform my enthusiasm into impactful and innovative web
            solutions.
          </Text>
        </div>
        <AboutContact  style={{zIndex: 5000}}>
            <div>
                <div>For any questions</div>
                <div>office@devandrew.net</div>
            </div>
            <div style={{fontSize: "28px"}}>- or -</div>
            <Button><a href="#contact">Contact Me</a></Button>
        </AboutContact>
      </SectionWrapper>
    </section>
  );
}
