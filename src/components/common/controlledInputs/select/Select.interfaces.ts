import { ISelectItemProps, ISelectProps as ISelectNativeProps } from "native-base";
import { FieldValues, UseControllerProps } from "react-hook-form";

interface ISelectProps extends ISelectNativeProps {
  label: string;
  placeholder?: string;
  name: string;
  options: ISelectItemProps[];
}

export type RhfSelectProps<T extends FieldValues> = ISelectProps & UseControllerProps<T>;
