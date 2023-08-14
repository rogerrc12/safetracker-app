import { FieldValues, UseControllerProps } from "react-hook-form";

export interface IDateInputProps {
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
}

export type RhfDateInputProps<T extends FieldValues> = IDateInputProps & UseControllerProps<T>;
