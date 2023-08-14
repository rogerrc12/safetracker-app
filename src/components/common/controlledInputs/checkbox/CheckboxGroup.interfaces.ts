import { FieldValues, UseControllerProps } from "react-hook-form";

interface ICheckboxGroupProps {
  name: string;
  checkboxes: CheckboxTypes[];
  disabled?: boolean;
}

type CheckboxTypes = {
  label: string;
  value: string;
};

export type rhfCheckboxGroupProps<T extends FieldValues> = ICheckboxGroupProps & UseControllerProps<T>;
