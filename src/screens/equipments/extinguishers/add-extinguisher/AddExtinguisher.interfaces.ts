import { StackScreenProps } from "@react-navigation/stack";
import { EquipmentsParamsList } from "@src/navigation/equipments/Equipments.params";
import { EquipmentsScreenNames } from "@src/navigation/equipments/Equipments.screen-names";
import { ExtinguisherAccesories } from "@src/services/extinguishers/add-extinguisher.interfaces";
import { FieldValues } from "react-hook-form";

export type IGeneralASpects = StackScreenProps<EquipmentsParamsList, EquipmentsScreenNames.ADD_EXTINGUISHER_GENERAL_ASPECTS>;
export type ITechnicalASpects = StackScreenProps<EquipmentsParamsList, EquipmentsScreenNames.ADD_EXTINGUISHER_TECH_ASPECTS>;
export type IKeyDates = StackScreenProps<EquipmentsParamsList, EquipmentsScreenNames.ADD_EXTINGUISHER_KEY_DATES>;

export interface IAddExtinguisherValues extends FieldValues {
  // General aspects
  qrCode: string;
  location: string;
  subLocation: string;
  type: string;
  brand: string;
  serialNumber: string;
  state: string;
  photoUrl: string;

  // Technical aspects
  className: string;
  capacity: string;
  agent: string;

  // Accessories
  accessories: ExtinguisherAccesories[];

  // Key Dates
  lastHydraulicTest: string;
  lastVisualInspection: string;
  lastRecharge: string;
  nextHydraulicTest: Date | string;
  nextVisualInspection: Date | string;
  nextRecharge: Date | string;
}
