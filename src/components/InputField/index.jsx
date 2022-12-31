import React from "react";

const InputField = ({ onChange, placeholder, name, className }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      class={"form-control " + className}
      onChange={onChange}
    ></input>
  );
};

export default InputField;
