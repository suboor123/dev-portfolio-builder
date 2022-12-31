import React from "react";

const Main = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <section>
            {children}
        </section>
      </div>
    </div>
  );
};

export default Main;
