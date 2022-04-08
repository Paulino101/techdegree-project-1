import React from "react";

function Project({
  name,
  description,
  img,
  githubLink,
  currentTheme,
  liveLink,
}) {
  return (
    <div className={`card ${currentTheme}`} style={{ width: "100%" }}>
      <img className="card-img-top" src={img} alt={description} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={githubLink} target="_blank" class="badge badge-secondary p-3">
          Code
        </a>
        <a
          href={liveLink}
          target="_blank"
          class="badge badge-secondary p-3 ml-3"
        >
          Live View
        </a>
      </div>
    </div>
  );
}

export default Project;
