import { FieldValues, UseControllerProps } from "react-hook-form";
import { StyleProp, ViewStyle } from "react-native";

export interface IInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  containerStyles?: StyleProp<ViewStyle>;
  keyboardType?: "default" | "email-address";
}

export type RhfInputProps<T extends FieldValues> = IInputProps & UseControllerProps<T>;
