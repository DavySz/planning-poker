import { ActionMeta, SingleValue } from "react-select";

export type TOption = {
  value: string;
  label: string;
};

export interface IInputSelector {
  options: TOption[];
  placeholder: string;
  onChange: (
    newValue: SingleValue<TOption>,
    actionMeta: ActionMeta<TOption>
  ) => void;
}
