import { FieldValues } from "react-hook-form";

type VisibilityTypes = 0 | 1 | 2;

export interface IAddInspectionValues extends FieldValues {
  // Extinguisher details
  equipmentDetailid: number | null;
  internalCode: VisibilityTypes | null;
  qrCode: VisibilityTypes | null;
  manometer: VisibilityTypes;
  manometerReading: VisibilityTypes;
  determinedLoad: VisibilityTypes;
  hose: VisibilityTypes;
  nozzle: VisibilityTypes;
  cornet: VisibilityTypes;
  label: VisibilityTypes;
  sure: VisibilityTypes;
  hoseHolder: VisibilityTypes;
  paint: VisibilityTypes;
  instructions: VisibilityTypes;
  gripHandle: VisibilityTypes;
  conditioner: VisibilityTypes;
  // Control details
  controlCard: VisibilityTypes;
  testEquipment: VisibilityTypes;
  updateEquipment: VisibilityTypes;
  // Installation details
  visibility: VisibilityTypes;
  signaling: VisibilityTypes;
  access: VisibilityTypes;
  hook: VisibilityTypes;
}
