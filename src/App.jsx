import {GlobalStyles, color } from "./assets/GlobalStyles";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Footer from './components/Footer/Footer'


const Shape = styled.div`
  width: 0;
  height: 0;
  border-top: 1340px solid transparent; /* Adjust size as needed */
  border-left: 2400px solid ${color.secondary};
  position: absolute;
  top: 600px;
`;

function App() {
  function viewportWidth() {
    const threshold = 768;

    if (window.innerWidth < threshold) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <GlobalStyles />
      <Navbar onResize={viewportWidth()}/>
      {/* <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
        <Main style={{ zIndex: "20" }} />
        <About style={{ zIndex: "20" }} />
        <Services style={{ zIndex: "20" }} />
        <Shape></Shape>
      </div>
      <Projects />
      <Footer /> */}
    </>
  );
}

export default App;
