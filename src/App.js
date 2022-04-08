import React, { useState } from "react";
// components
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";
import ProjectsGrid from "./components/ProjectsGrid";
import Contact from "./components/Contact";
// imgs
import gallery_mockup from "./photos/gallery_mockup.png";
import wheelOfSuccess_mockup from "./photos/wheelOfSuccess.png";
import employeeDirectory_mockup from "./photos/employeeDirectory.png";
// svg
import emailSvg from "./svg/email-svgrepo-com.svg";
import githubSvg from "./svg/github-svgrepo-com.svg";
import phoneSvg from "./svg/phone-svgrepo-com.svg";
// stylesheet
import "./styles.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App(props) {
  // State
  const [changePageTheme, setChangePageTheme] = useState(true);
  const [showThemeButton, setShowThemeButton] = useState(true);
  const [projects, setProjects] = useState([
    {
      name: "An Interactive Photo Gallery",
      description: "Interactive Gallery built with HTML, CSS and Javascript",
      img: gallery_mockup,
      githubLink: "https://github.com/Paulino101/photoGallery",
      liveLink: "https://paulino101.github.io/photoGallery/",
      id: 1,
    },
    {
      name: "Game show App",
      description: "Wheel of Fortune type game",
      img: wheelOfSuccess_mockup,
      githubLink: "https://github.com/Paulino101/wheelOfSuccess",
      liveLink: "https://paulino101.github.io/wheelOfSuccess/",
      id: 2,
    },
    {
      name: "Employee Directory",
      description:
        "Using API to get and display mock employee data, originally made with HTML and CSS. Built again using React.",
      img: employeeDirectory_mockup,
      githubLink: "https://github.com/Paulino101/employeeDiretoryReact.js",
      liveLink: "https://employee-directoryy.netlify.app/",
      id: 3,
    },
  ]);

  //   variables
  let showThemeButtonDisplay;
  let showThemeButtonText;
  let currentThemeNav;
  let currentThemeBtn;
  let currentJumboTheme;
  let svgTheme = "";

  //   Handler Functions
  function handleThemeChange() {
    setChangePageTheme(!changePageTheme);
  }

  function handleShowChangeThemeButton() {
    setShowThemeButton(!showThemeButton);
  }

  // If Statements
  if (changePageTheme === true) {
    currentThemeNav = "navbar-dark bg-dark";
    currentThemeBtn = "btn-light";
    currentJumboTheme = "bg-dark text-white";
    showThemeButtonText = "Click for Light Theme";
    svgTheme = "svg-white";
  } else {
    currentThemeNav = "navbar-light bg-light";
    currentThemeBtn = "btn-dark";
    currentJumboTheme = "bg-white text-dark";
    showThemeButtonText = "Click for Dark Theme";
    svgTheme = "svg";
  }

  return (
    <div className={currentJumboTheme}>
      <NavBar
        handleThemeChange={handleThemeChange}
        handleShowChangeThemeButton={handleShowChangeThemeButton}
        showThemeButtonText={showThemeButtonText}
        showThemeButtonDisplay={showThemeButtonDisplay}
        currentThemeNav={currentThemeNav}
        currentThemeBtn={currentThemeBtn}
      />
      <ThemeSwitcher
        onClickHandler={handleThemeChange}
        switchText={showThemeButton}
      />
      <Jumbotron currentJumboTheme={currentJumboTheme} />
      <ProjectsGrid projectArray={projects} currentTheme={currentJumboTheme} />
      <Contact
        svgTheme={svgTheme}
        phoneSvg={phoneSvg}
        emailSvg={emailSvg}
        githubSvg={githubSvg}
      />
    </div>
  );
}

export default App;
