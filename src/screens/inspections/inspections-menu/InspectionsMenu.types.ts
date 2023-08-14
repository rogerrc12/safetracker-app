import { StackScreenProps } from "@react-navigation/stack";
import { InspectionsParamList } from "@src/navigation/inspections/Inspections.params";
import { InspectionsScreenNames } from "@src/navigation/inspections/Inspections.screen-names";

export type InspectionsMenuProps = StackScreenProps<InspectionsParamList, InspectionsScreenNames.INSPECTIONS_MENU>;
