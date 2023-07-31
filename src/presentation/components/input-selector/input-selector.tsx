import React from "react";
import Select from "react-select";
import { IInputSelector } from "./input-selector.types";
import { customStyles } from "./input-selector.styles";

export const InputSelector: React.FC<IInputSelector> = ({
  placeholder,
  onChange,
  options,
}) => {
  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
