import { StackScreenProps } from "@react-navigation/stack";
import { EquipmentsParamsList } from "@src/navigation/equipments/Equipments.params";
import { EquipmentsScreenNames } from "@src/navigation/equipments/Equipments.screen-names";

export type EquipmentsMenuProps = StackScreenProps<EquipmentsParamsList, EquipmentsScreenNames.EQUIPMENTS>;
