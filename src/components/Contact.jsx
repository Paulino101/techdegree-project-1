import React from "react";

function Contact({ phoneSvg, emailSvg, githubSvg, svgTheme }) {
  return (
    //   svgs that link to contacts plus copyright info
    <footer>
      <div className="contactInfo">
        <a href="tel:7077101688">
          <img className={`m-1 ${svgTheme}`} src={phoneSvg} alt="phone icon" />
        </a>
        <a href="mailto:pavito54@live.com">
          <img className={`m-1 ${svgTheme}`} src={emailSvg} alt="mail icon" />
        </a>
        <a href="https://github.com/Paulino101" target="_blank">
          <img
            className={`m-1 ${svgTheme}`}
            src={githubSvg}
            alt="github icon"
          />
        </a>
      </div>
      <p className="m-0">&copy; Paulino Rodriguez 2022</p>
    </footer>
  );
}

export default Contact;
