import React from "react";

const Button = ({ children, onClick, className, appeareance = "primary" }) => {
  return (
    <button className={`btn btn-${appeareance} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
