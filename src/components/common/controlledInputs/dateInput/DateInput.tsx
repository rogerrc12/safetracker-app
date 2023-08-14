import { Text } from "native-base";
import { FieldValues, useController } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { RhfDateInputProps } from "./DateInput.interfaces";
import { styles } from "./DateInput.styles";
import DatePicker from "../../UI/datePicker/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";

function DateInput<T extends FieldValues>({ label, control, name, placeholder, disabled }: RhfDateInputProps<T>) {
  const [isDatePickerShown, setIsDatePickerShown] = useState(false);

  const handleShowPicker = () => setIsDatePickerShown(true);
  const handleHidePicker = () => setIsDatePickerShown(false);
  const { field } = useController({
    name,
    control,
  });

  const onDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) field.onChange(dayjs(selectedDate).format("DD/MM/YYYY"));
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text fontWeight={600} mb="1">
          {label}
        </Text>
      )}
      <TouchableOpacity style={styles.inputContainer} onPress={disabled ? undefined : handleShowPicker} activeOpacity={disabled ? 1 : 0.8}>
        <View style={[styles.input, disabled ? { backgroundColor: "#ddd" } : {}]}>
          <Text>{field.value || placeholder}</Text>
        </View>
      </TouchableOpacity>
      <DatePicker
        onDateChange={onDateChange}
        isShown={isDatePickerShown}
        hidePicker={handleHidePicker}
        defaultDate={field.value || new Date().toISOString()}
      />
    </View>
  );
}

export default DateInput;
