import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreenNames } from "./DrawerScreen.names";
import Dashboard from "@src/screens/dashboard/Dashboard.screen";
import DrawerHeader from "@src/components/navigation/DrawerHeader";
import { DrawerParamList } from "./Drawer.params";
import EquipmentsNavigator from "../equipments/EquipmentsNavigator";
import InspectionsNavigator from "../inspections/InspectionsNavigator";

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ header: () => <DrawerHeader /> }}>
      <Drawer.Screen name={DrawerScreenNames.DASHBOARD} component={Dashboard} />
      <Drawer.Screen name={DrawerScreenNames.EQUIPMENTS} options={{ headerShown: false }} component={EquipmentsNavigator} />
      <Drawer.Screen name={DrawerScreenNames.INSPECTIONS} options={{ headerShown: false }} component={InspectionsNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
