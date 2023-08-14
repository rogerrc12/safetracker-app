import MenuItem from "@src/components/common/UI/menuItem/MenuItem";
import Screen from "@src/components/common/utils/Screen";
import { useTheme } from "native-base";
import type { InspectionsMenuProps } from "./InspectionsMenu.types";
import { InspectionsScreenNames } from "@src/navigation/inspections/Inspections.screen-names";

function InspectionsMenu({ navigation }: InspectionsMenuProps) {
  const { colors } = useTheme();

  return (
    <Screen>
      <MenuItem
        icon="fire-extinguisher"
        iconColor={colors.primary[500]}
        label="Extintores"
        onSelect={() => navigation.navigate(InspectionsScreenNames.EXTINGUISHERS_INSPECTIONS)}
        description="Administrar inspecciones"
      />
    </Screen>
  );
}

export default InspectionsMenu;
