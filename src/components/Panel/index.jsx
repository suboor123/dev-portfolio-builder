import React from "react";

const Panel = ({ children, heading }) => {
  return (
    <div className="container">
      <div class="section-title h2 text-center mb-8">
        <h2 class="mb-0">{heading}</h2>
        <span class="title-letter">{heading[0]}</span>
      </div>
      {children}
    </div>
  );
};

export default Panel;
