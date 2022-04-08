import React from "react";

function ThemeSwitcher({ onClickHandler, switchText }) {
  return (
    <div className="form-check form-switch">
      <input
        onClick={onClickHandler}
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label
        className="form-check-label text-white"
        for="flexSwitchCheckDefault"
      >
        {switchText}
      </label>
    </div>
  );
}

export default ThemeSwitcher;
