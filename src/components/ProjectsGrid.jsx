import React from "react";
import Project from "./Project";

function ProjectsGrid({ projectArray, currentTheme }) {
  return (
    <div className="projectsContainer">
      {projectArray.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          img={project.img}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          currentTheme={currentTheme}
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;
