import Card from "@src/components/common/UI/Card";
import Screen from "@src/components/common/utils/Screen";
import { Text, useTheme } from "native-base";
import { Pressable, View } from "react-native";
import { EquipmentsMenuProps } from "./EquipmentsMenu.types";
import { FontAwesome5 } from "@expo/vector-icons";
import { RootScreenNames } from "@src/navigation/root/Root.screen-names";

function EquipmentsMenu({ navigation }: EquipmentsMenuProps) {
  const { colors } = useTheme();

  return (
    <Screen>
      <Card>
        <Pressable onPress={() => navigation.navigate(RootScreenNames.EXTINGUISHERS)}>
          <View style={{ alignItems: "center" }}>
            <FontAwesome5 name="fire-extinguisher" size={45} color={colors.primary} />
            <Text mt="2" color="black" fontSize="2xl" fontWeight={600}>
              Extintores
            </Text>
            <Text fontWeight={600} color="gray.400">
              Administración de extintores
            </Text>
          </View>
        </Pressable>
      </Card>
    </Screen>
  );
}

export default EquipmentsMenu;
