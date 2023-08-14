import AddButton from "@src/components/common/UI/buttons/AddButton";
import Screen from "@src/components/common/utils/Screen";
import { ExtinguisherInspectionsProps } from "./ExtinguisherInspections.types";
import { InspectionsScreenNames } from "@src/navigation/inspections/Inspections.screen-names";

function ExtinguishersInspections({ navigation }: ExtinguisherInspectionsProps) {
  return (
    <Screen>
      <AddButton onPress={() => navigation.navigate(InspectionsScreenNames.ADD_INSPECTION_STEP_1)} />
    </Screen>
  );
}

export default ExtinguishersInspections;
