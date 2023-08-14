import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddExtinguisherState } from "./add-extinguisher.interfaces";

const initialState: IAddExtinguisherState = {
  // General aspects
  qrCode: "",
  location: "",
  subLocation: "",
  type: "",
  brand: "",
  serialNumber: "",
  state: "",
  photoUrl: "",

  // Technical aspects
  className: "",
  capacity: "",
  agent: "",

  // Accessories
  accessories: [],

  // Key Dates
  lastHydraulicTest: "",
  lastVisualInspection: "",
  lastRecharge: "",
  nextHydraulicTest: "",
  nextVisualInspection: "",
  nextRecharge: "",
};

const addExtinguisherSlice = createSlice({
  name: "addExtinguisher",
  initialState,
  reducers: {
    updateExtinguisherValues: (_, action: PayloadAction<IAddExtinguisherState>) => {
      return action.payload;
    },
    resetExtinguisherValues: () => {
      return initialState;
    },
  },
});

export const { updateExtinguisherValues, resetExtinguisherValues } = addExtinguisherSlice.actions;
export default addExtinguisherSlice.reducer;
