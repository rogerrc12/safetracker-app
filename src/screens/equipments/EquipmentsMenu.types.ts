import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { DrawerParamList } from "@src/navigation/drawer/Drawer.params";
import { DrawerScreenNames } from "@src/navigation/drawer/DrawerScreen.names";
import { RootNavigatorParamList } from "@src/navigation/root/Root.params";

export type EquipmentsMenuProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, DrawerScreenNames.EQUIPMENTS>,
  StackScreenProps<RootNavigatorParamList>
>;
