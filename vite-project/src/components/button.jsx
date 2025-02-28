import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ link, className, text, ...props }) => {
  return (
    <button
      onClick={() => {
        <Link to={link} />;
      }}
      className={className}
      {...props}
    >
      {text}
    </button>
  );
};
