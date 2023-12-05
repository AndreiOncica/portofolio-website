import React from "react";
import styled from "styled-components";
import { color, SectionWrapper } from "../../assets/GlobalStyles";
import SocialIcons from "../Main/SocialIcons";
import Form from "./Form";

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  & div {
    color: ${color.accent};
  }
`;

const Right = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1rem;

    & textarea,
    input {
      background: transparent;
      border: none;
      border-bottom: 1px solid ${color.secondary};
      padding: 1rem;
      font-family: inherit;
      color: ${color.text};
    }

    & textarea {
      border: 1px solid ${color.secondary};
      border-top: none;
    }

    & Button {
      aspect-ratio: 1/1;
      width: 50px;
      height: 50px;
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        width: 60%;
        aspect-ratio: 1/1;
      }
    }
  }
`;

export default function Footer({ viewport }) {
  return (
    <section id="contact">
      <SectionWrapper
        display="flex"
        justifycontent={viewport === "desktop" ? "space-between" : "center"}
        flexWrap="wrap"
        gap="4rem"
      >
        <Left>
          <h5>Got a project?</h5>
          <p>Let's talk</p>
          <div>office@devandrew.net</div>
          <SocialIcons />
        </Left>
        <Right>
          <h5>Contact me</h5>
          <Form />
        </Right>
      </SectionWrapper>
    </section>
  );
}
