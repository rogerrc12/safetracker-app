import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Text, View } from "native-base";
import { useState } from "react";
import { Modal, Platform, TouchableOpacity } from "react-native";
import styles from "./DatePicker.styles";
import { IDatePickerProps } from "./DatePicker.interfaces";

function DatePicker({ onDateChange, defaultDate = "", isShown, hidePicker }: IDatePickerProps) {
  const [date, setDate] = useState(new Date(defaultDate));

  const handleSelectDate = (_: DateTimePickerEvent, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (Platform.OS === "android") {
      onDateChange(currentDate);
      hidePicker();
    }
  };

  const onConfirmDate = () => {
    onDateChange(date);
    hidePicker();
  };

  const renderDatePicker = (): React.ReactNode => {
    return (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        locale="es-ES"
        is24Hour
        display={Platform.OS === "ios" ? "spinner" : "default"}
        style={styles.datePicker}
        onChange={handleSelectDate}
      />
    );
  };

  return Platform.OS === "android" ? (
    renderDatePicker()
  ) : (
    <Modal
      animationType={Platform.OS === "ios" ? "slide" : "fade"}
      transparent
      supportedOrientations={["portrait"]}
      visible={isShown}
      onRequestClose={hidePicker}
    >
      <View style={styles.modalScreen}>
        <View style={styles.modalContainer}>
          <View style={styles.datePickerModalHeader}>
            <TouchableOpacity activeOpacity={0.7} onPress={hidePicker}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={onConfirmDate}>
              <Text color="primary.500">Confirmar</Text>
            </TouchableOpacity>
          </View>
          {renderDatePicker()}
        </View>
      </View>
    </Modal>
  );
}

export default DatePicker;
