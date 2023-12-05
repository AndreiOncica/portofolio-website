import React from "react";
import styled from "styled-components";
import { color } from "../../assets/GlobalStyles";

const data = [
  {
    id: 1,
    path: "#about",
    text: "ABOUT",
  },
  {
    id: 2,
    path: "#services",
    text: "SERVICES",
  },
  {
    id: 3,
    path: "#projects",
    text: "PROJECTS",
  },
  {
    id: 4,
    path: "#contact",
    text: "CONTACT",
  },
];

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  transition: ${({transition}) => transition}

  & div {
    font-size: 16px;
    font-weight: 500;
    color: ${color.textInactive};

    & :hover {
      color: ${color.text};
      text-decoration-line: underline;
      text-decoration-thickness: 2px;
      text-decoration-color: ${color.accent};
    }
  }
`;

export default function Links({style}) {
  return (
    <NavLinks style={style}>
      {data.map((link) => {
        return (
          <div key={link.id}>
            <a href={link.path}>{link.text}</a>
          </div>
        );
      })}
    </NavLinks>
  );
}
