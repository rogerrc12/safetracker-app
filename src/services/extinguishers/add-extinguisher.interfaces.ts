export interface IAddExtinguisherState {
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

export type ExtinguisherAccesories = "hose" | "nozzle" | "cornet" | "piton" | "vehicle bracket" | "hose holder";
