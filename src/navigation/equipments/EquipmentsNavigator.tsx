import { createStackNavigator } from "@react-navigation/stack";

import { EquipmentsNavigatorParams } from "./Equipments.params";
import { EquipmentsScreenNames } from "./EquipmentsScreen.names";

// SCREENS
import EquipmentsMenu from "@src/screens/equipments/EquipmentsMenu";
import Extinguishers from "@src/screens/extinguishers/Extinguishers";

const Stacks = createStackNavigator<EquipmentsNavigatorParams>();

function EquipmentsNavigator() {
  return (
    <Stacks.Navigator initialRouteName={EquipmentsScreenNames.EQUIPMENTS_MENU}>
      <Stacks.Screen name={EquipmentsScreenNames.EQUIPMENTS_MENU} options={{ headerShown: false }} component={EquipmentsMenu} />
      <Stacks.Screen name={EquipmentsScreenNames.EXTINGUISHERS} component={Extinguishers} />
    </Stacks.Navigator>
  );
}

export default EquipmentsNavigator;
