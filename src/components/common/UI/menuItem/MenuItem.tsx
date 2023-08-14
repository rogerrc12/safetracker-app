import { Pressable, View } from "react-native";
import Card from "../Card";
import { Text } from "native-base";
import { IMenuItemProps } from "./MenuItem.interfaces";
import { FontAwesome5 } from "@expo/vector-icons";

function MenuItem({ onSelect, icon, iconColor, label, description }: IMenuItemProps) {
  return (
    <Pressable onPress={onSelect}>
      <Card>
        <View style={{ alignItems: "center" }}>
          {icon && <FontAwesome5 name={icon} size={45} color={iconColor} />}
          <Text mt="2" color="black" fontSize="2xl" fontWeight={600}>
            {label}
          </Text>
          {description && (
            <Text fontWeight={600} color="gray.400">
              {description}
            </Text>
          )}
        </View>
      </Card>
    </Pressable>
  );
}

export default MenuItem;
