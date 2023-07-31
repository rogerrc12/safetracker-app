import { createStackNavigator } from "@react-navigation/stack";
import { RootScreenNames } from "./Root.screen-names";
import DrawerNavigator from "../drawer/DrawerNavigator";
import Extinguishers from "@src/screens/extinguishers/Extinguishers";
import { RootNavigatorParamList } from "./Root.params";

const RootStack = createStackNavigator<RootNavigatorParamList>();

function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen options={{ headerShown: false }} name={RootScreenNames.MAINNAV} component={DrawerNavigator} />
      <RootStack.Group>
        <RootStack.Screen name={RootScreenNames.EXTINGUISHERS} component={Extinguishers} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default RootNavigator;
