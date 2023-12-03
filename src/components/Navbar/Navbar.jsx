import React, { useEffect } from "react";
import styled from "styled-components";
import { color, SectionWrapper } from "../../assets/GlobalStyles";
import Links from "./Links";

const Nav = styled.nav`
  background-color: ${color.primary};
  border: 1px solid ${color.secondary};
  position: fixed;
  width: 100%;
  z-index: 50000;
`;

const Logo = styled.div`
  font-size: 22px;
  & span {
    color: ${color.accent};
    font-weight: bold;
  }
`;

export default function Navbar({resize}) {
  
  return (
    <Nav>
      <SectionWrapper
        height="80px"
        display="flex"
        justifycontent="space-between"
        alignitems="center"
        maxwidth="1000px"
      >
        <Logo>
          <a href="#home">
            dev<span>Andrew</span>
          </a>
        </Logo>
        <Links />
      </SectionWrapper>
    </Nav>
  );
}
