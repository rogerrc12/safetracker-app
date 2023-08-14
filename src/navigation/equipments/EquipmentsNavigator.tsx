import { createStackNavigator } from "@react-navigation/stack";
import EquipmentsMenu from "@src/screens/equipments/EquipmentsMenu";
import { EquipmentsParamsList } from "./Equipments.params";
import { EquipmentsScreenNames } from "./Equipments.screen-names";
import Extinguishers from "@src/screens/equipments/extinguishers/Extinguishers";
import GeneralAspects from "@src/screens/equipments/extinguishers/add-extinguisher/GeneralAspects";
import TechnicalAspects from "@src/screens/equipments/extinguishers/add-extinguisher/TechnicalAspects";
import DrawerHeader from "@src/components/navigation/DrawerHeader";
import KeyDates from "@src/screens/equipments/extinguishers/add-extinguisher/KeyDates";
import TitleHeader from "@src/components/navigation/TitleHeader";
import HeaderBackButton from "@src/components/navigation/HeaderBackButton";

const Stack = createStackNavigator<EquipmentsParamsList>();

function EquipmentsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitle: () => <TitleHeader title="Agregar extintor" />, headerLeft: () => <HeaderBackButton /> }}
    >
      <Stack.Screen name={EquipmentsScreenNames.EQUIPMENTS} options={{ header: () => <DrawerHeader /> }} component={EquipmentsMenu} />
      <Stack.Screen name={EquipmentsScreenNames.EXTINGUISHERS} component={Extinguishers} />
      <Stack.Group navigationKey="AddExtinguisher">
        <Stack.Screen name={EquipmentsScreenNames.ADD_EXTINGUISHER_GENERAL_ASPECTS} component={GeneralAspects} />
        <Stack.Screen name={EquipmentsScreenNames.ADD_EXTINGUISHER_TECH_ASPECTS} component={TechnicalAspects} />
        <Stack.Screen name={EquipmentsScreenNames.ADD_EXTINGUISHER_KEY_DATES} component={KeyDates} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default EquipmentsNavigator;
