import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    width: "100%",
  },
  datePicker: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 320,
    height: 260,
    display: "flex",
  },
});
