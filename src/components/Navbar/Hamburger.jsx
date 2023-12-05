import React, { useState } from "react";
import styled from "styled-components";

const NavBtn = styled.div`
  width: 24px;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  & div {
    width: 100%;
    height: 2px;
    background: white;
    transition: 0.2s ease;
  }
`;

export default function Hamburger({ onChange, isActive }) {
  return (
    <NavBtn onClick={onChange}>
      <div
        style={{
          transform: isActive
            ? "rotateZ(45deg) translate(6px, 6px)"
            : "rotateZ(0deg)",
        }}
      ></div>
      <div style={{ opacity: isActive ? 0 : 1 }}></div>
      <div
        style={{
          transform: isActive
            ? "rotateZ(-45deg) translate(5px, -5px)"
            : "rotatez(0deg)",
        }}
      ></div>
    </NavBtn>
  );
}
