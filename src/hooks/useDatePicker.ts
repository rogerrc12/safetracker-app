import { useRef } from "react";

export function useDatePicker() {
  const isDatePickerShown = useRef(false);

  console.log({ isDatePickerShown: isDatePickerShown.current });

  const handleShowPicker = () => {
    console.log("handleShowPicker");
    isDatePickerShown.current = true;
  };
  const handleHidePicker = () => (isDatePickerShown.current = false);

  return { isShown: isDatePickerShown.current, showPicker: handleShowPicker, hidePicker: handleHidePicker };
}
