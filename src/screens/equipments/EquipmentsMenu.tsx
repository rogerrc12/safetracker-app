import Screen from "@src/components/common/utils/Screen";
import { useTheme } from "native-base";
import { EquipmentsMenuProps } from "./EquipmentsMenu.types";
import MenuItem from "@src/components/common/UI/menuItem/MenuItem";
import { EquipmentsScreenNames } from "@src/navigation/equipments/Equipments.screen-names";

function EquipmentsMenu({ navigation }: EquipmentsMenuProps) {
  const { colors } = useTheme();

  return (
    <Screen>
      <MenuItem
        icon="fire-extinguisher"
        iconColor={colors.primary[500]}
        label="Extintores"
        onSelect={() => navigation.navigate(EquipmentsScreenNames.EXTINGUISHERS)}
        description="Administrar extintores"
      />
    </Screen>
  );
}

export default EquipmentsMenu;
