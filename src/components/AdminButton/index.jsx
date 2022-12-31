import React from "react";
import Button from "../Button";

const AdminButton = ({
  children,
  onClick,
  className = "",
  appeareance = "primary",
}) => {
  const isAdmin = localStorage.getItem("secret") === "suboor@123";
  if (isAdmin) {
    return (
      <Button onClick={onClick} className={className} appeareance={appeareance}>
        {children}
      </Button>
    );
  }

  return <></>;
};

export default AdminButton;
