import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Button = ({ link, className, text, ...props }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(link)} className={className} {...props}>
      {text}
    </button>
  );
};
