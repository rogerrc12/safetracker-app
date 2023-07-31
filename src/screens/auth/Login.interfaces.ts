import { StackScreenProps } from "@react-navigation/stack";
import { AuthNavigatorParams } from "@src/navigation/auth/AuthNavigator.params";
import { AuthScreenNames } from "@src/navigation/auth/AuthScreen.names";
import { FieldValues } from "react-hook-form";

export interface ILoginFormValues extends FieldValues {
  email: string;
  password: string;
}

export type ILoginProps = StackScreenProps<AuthNavigatorParams, AuthScreenNames.LOGIN>;
