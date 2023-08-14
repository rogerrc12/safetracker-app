import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalScreen: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: "30%",
    position: "absolute",
    bottom: 0,
  },
  datePicker: {
    width: "100%",
    alignSelf: "center",
  },
  datePickerModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default styles;
