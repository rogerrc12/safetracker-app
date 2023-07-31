import { NavigatorScreenParams } from "@react-navigation/native";
import { RootScreenNames } from "./Root.screen-names";
import { DrawerParamList } from "../drawer/Drawer.params";

export type RootNavigatorParamList = {
  [RootScreenNames.MAINNAV]: NavigatorScreenParams<DrawerParamList>;
  [RootScreenNames.EXTINGUISHERS]: undefined;
};
