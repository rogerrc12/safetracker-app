import { FieldValues, UseControllerProps } from "react-hook-form";
import { StyleProp, ViewStyle } from "react-native";
import { IInputProps as BaseInputProps } from "native-base";

export interface IInputProps extends BaseInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  containerStyles?: StyleProp<ViewStyle>;
  keyboardType?: "default" | "email-address";
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCompleteType?: "off" | "username" | "password";
  disabled?: boolean;
}

export type RhfInputProps<T extends FieldValues> = IInputProps & UseControllerProps<T>;
