import { Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import styles from "./AddButton.styles";

interface AddButtonProps {
  onPress: () => void;
}

function AddButton({ onPress }: AddButtonProps) {
  return (
    <Pressable style={styles.addButton} onPress={onPress}>
      <Ionicons name="add" size={34} color="white" />
    </Pressable>
  );
}

export default AddButton;
