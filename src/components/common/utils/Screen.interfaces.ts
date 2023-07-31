import { StyleProp, ViewStyle } from "react-native";

export interface IScreenProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}
