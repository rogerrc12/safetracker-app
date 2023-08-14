export interface IDatePickerProps {
  onDateChange: (date: Date | undefined) => void;
  defaultDate?: string;
  isShown: boolean;
  hidePicker: () => void;
}
