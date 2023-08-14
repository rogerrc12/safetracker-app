import { NavigatorScreenParams } from "@react-navigation/native";
import { DrawerScreenNames } from "./DrawerScreen.names";
import { EquipmentsParamsList } from "../equipments/Equipments.params";
import { InspectionsParamList } from "../inspections/Inspections.params";

export type DrawerParamList = {
  [DrawerScreenNames.DASHBOARD]: undefined;
  [DrawerScreenNames.EQUIPMENTS]: NavigatorScreenParams<EquipmentsParamsList>;
  [DrawerScreenNames.INSPECTIONS]: NavigatorScreenParams<InspectionsParamList>;
};
