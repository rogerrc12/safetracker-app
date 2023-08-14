import { FontAwesome5 } from "@expo/vector-icons";

export interface IMenuItemProps {
  label: string;
  icon?: keyof typeof FontAwesome5.glyphMap;
  iconColor?: string;
  description?: string;
  onSelect?: () => void;
}
