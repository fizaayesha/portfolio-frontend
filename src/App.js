import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import Blogs from "./Pages/Blogs";
import { Route, Routes as Switching } from "react-router-dom";
import { BrightnessMediumSharp } from "@material-ui/icons";
import Switch from "@material-ui/core/Switch";
import { useState, useEffect } from "react";
import { MenuRounded } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import WomeninTech from "./Components/WomeninTech";
import CssEffects from "./Components/CssEffects";
function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <div div className="App">
      <Sidebar navToggle={navToggle} />
      <div className="theme">
        <div className="mode">
          <div className="left-content">
            <BrightnessMediumSharp />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onChange={themeToggler}
            />
          </div>
        </div>
      </div>
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuRounded />
        </IconButton>
      </div>
      <MainContentStyles>
        <Switching>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/women-in-tech" element={<WomeninTech />} />
          <Route path="/blogs/css-effects" element={<CssEffects />} />
        </Switching>
      </MainContentStyles>
    </div>
  );
}
const MainContentStyles = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
export default App;
