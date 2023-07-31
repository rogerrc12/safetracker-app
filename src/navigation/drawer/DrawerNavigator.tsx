import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreenNames } from "./DrawerScreen.names";
import Dashboard from "@src/screens/dashboard/Dashboard.screen";
import DrawerHeader from "@src/components/navigation/DrawerHeader";
import { DrawerParamList } from "./Drawer.params";
import EquipmentsMenu from "@src/screens/equipments/EquipmentsMenu";

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ header: (props) => <DrawerHeader {...props} /> }}>
      <Drawer.Screen name={DrawerScreenNames.DASHBOARD} component={Dashboard} />
      <Drawer.Screen name={DrawerScreenNames.EQUIPMENTS} component={EquipmentsMenu} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
