import React, { useState, useEffect } from "react";
import { GlobalStyles, color } from "./assets/GlobalStyles";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const Shape = styled.div`
  width: 0;
  height: 0;
  border-top: 1340px solid transparent; /* Adjust size as needed */
  border-left: 2400px solid ${color.secondary};
  position: absolute;
  top: 600px;
`;

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [prevWidth, setPrevWidth] = useState(window.innerWidth);
  const [deviceType, setDeviceType] = useState(
    window.innerWidth > 768 ? "desktop" : "mobile"
  );

  useEffect(() => {
    const handleResize = () => {
      setPrevWidth(width);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  useEffect(() => {
    if (
      (prevWidth <= 768 && width > 768) ||
      (prevWidth > 768 && width <= 768)
    ) {
      setDeviceType(width > 768 ? "desktop" : "mobile");
    }
  }, [width, prevWidth]);
  return (
    <>
      <GlobalStyles />
      <Navbar viewport={deviceType}/>
      <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
        <Main style={{ zIndex: "2000000" }} />
        <About style={{ zIndex: "20" }} />
        <Services style={{ zIndex: "20" }} />
        <Shape></Shape>
      </div>
      <Projects />
      <Footer viewport={deviceType}/>
    </>
  );
}

export default App;
