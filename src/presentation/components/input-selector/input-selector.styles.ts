import { GroupBase, StylesConfig } from "react-select";
import { TOption } from "./input-selector.types";

export const customStyles: StylesConfig<TOption, false, GroupBase<TOption>> = {
  control: (provided, state) => ({
    ...provided,
    border: `2px solid ${
      state.isFocused ? "rgb(59 130 246)" : "rgb(212 212 216)"
    }`,
    padding: 1.5,
    borderRadius: 6,
  }),
  placeholder: (provided, _) => ({
    ...provided,
    color: "rgb(212 212 216)",
  }),
};
