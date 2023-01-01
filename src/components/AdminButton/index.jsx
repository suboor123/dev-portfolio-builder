import React from "react";
import Button from "../Button";

const AdminButton = ({
  children,
  onClick,
  className = "",
  appeareance = "primary",
  size="md"
}) => {
  const isAdmin = localStorage.getItem("secret") === "suboor@123";
  if (isAdmin) {
    return (
      <button className={`btn btn-${appeareance} btn-${size} ${className}`} onClick={onClick}>
      {children}
    </button>
    );
  }

  return <></>;
};

export default AdminButton;
