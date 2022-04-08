import React from "react";

function Jumbotron({ currentJumboTheme }) {
  return (
    <div className={`jumbotron mb-0 ${currentJumboTheme}`}>
      <h1 className="display-4">Paulino Rodriguez</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <a className="btn btn-secondary btn-lg" href="#" role="button">
          More about me
        </a>
      </p>
    </div>
  );
}

export default Jumbotron;
