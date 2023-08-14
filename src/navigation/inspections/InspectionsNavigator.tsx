import { createStackNavigator } from "@react-navigation/stack";
import InspectionsMenu from "@src/screens/inspections/inspections-menu/InspectionsMenu";
import { InspectionsScreenNames } from "./Inspections.screen-names";
import DrawerHeader from "@src/components/navigation/DrawerHeader";
import ExtinguishersInspections from "@src/screens/inspections/extinguisher-inspections/ExtinguishersInspections";
import { InspectionsParamList } from "./Inspections.params";
import ExtinguisherDetails from "@src/screens/inspections/add-inspection/ExtinguisherDetails";
import TitleHeader from "@src/components/navigation/TitleHeader";
import HeaderBackButton from "@src/components/navigation/HeaderBackButton";
import AdditionalDetails from "@src/screens/inspections/add-inspection/AdditionalDetails";

const Stack = createStackNavigator<InspectionsParamList>();

function InspectionsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerLeft: () => <HeaderBackButton /> }} initialRouteName={InspectionsScreenNames.INSPECTIONS_MENU}>
      <Stack.Screen
        options={{ header: () => <DrawerHeader /> }}
        name={InspectionsScreenNames.INSPECTIONS_MENU}
        component={InspectionsMenu}
      />
      <Stack.Screen
        options={{ headerTitle: () => <TitleHeader title="Extintores" /> }}
        name={InspectionsScreenNames.EXTINGUISHERS_INSPECTIONS}
        component={ExtinguishersInspections}
      />
      <Stack.Group screenOptions={{ headerTitle: () => <TitleHeader title="Agregar Inspección" /> }}>
        <Stack.Screen name={InspectionsScreenNames.ADD_INSPECTION_STEP_1} component={ExtinguisherDetails} />
        <Stack.Screen name={InspectionsScreenNames.ADD_INSPECTION_STEP_2} component={AdditionalDetails} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default InspectionsNavigator;
