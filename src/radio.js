import React, { Fragment } from "react";
import "./input.css";

const radioButton = ({ name, placeholder, value, v }) => {
  return (
    <div className="radio">
      {!v ? (
        <Fragment>
          <input
            type="radio"
            value={value}
            name={name}
            placeholder={placeholder}
          />
          {value}
        </Fragment>
      ) : (
        <Fragment>
          <input
            type="checkbox"
            value={value}
            name={name}
            placeholder={placeholder}
          />
          {value}
        </Fragment>
      )}
    </div>
  );
};
export default radioButton;
