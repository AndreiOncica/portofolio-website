import React from "react";
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export default function SocialIcons() {
  return (
    <IconsWrapper>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size="30px" />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub size="30px" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size="30px" />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size="30px" />
      </a>
    </IconsWrapper>
  );
}
