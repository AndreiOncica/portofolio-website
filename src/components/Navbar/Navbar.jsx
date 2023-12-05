import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { color, SectionWrapper } from "../../assets/GlobalStyles";
import Links from "./Links";
import NavBtn from "./Hamburger";

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

export default function Navbar({ viewport }) {
  const [menuState, setMenuState] = useState(false);

  console.log(menuState);
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
        <Links
          style={{
            backgroundColor: color.primary,
            padding: '1rem 0',
            width: viewport === 'mobile' ? '100%' : 'auto',
            position: viewport === "desktop" ? "relative" : "absolute",
            top: viewport === "mobile" ? "80px" : "",
            justifyContent: 'center',
            left: viewport === 'mobile' ? 0 : 'auto'
          }}
        />
      </SectionWrapper>
    </Nav>
  );
}
