import React from "react";

export const Service = ({ number, title, text }) => {
  return (
    <div className="service__block">
      <div className="service__result_number">{number}</div>
      <h4 className="service__result_title">{title}</h4>
      <p className="service__result_text">{text}</p>
    </div>
  );
};
