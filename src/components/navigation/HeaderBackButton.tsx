import { StackNavigationProp } from "@react-navigation/stack";
import { Pressable, useTheme } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function HeaderBackButton() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { colors } = useTheme();

  return (
    <Pressable onPress={navigation.goBack} style={{ paddingLeft: 8 }}>
      <Ionicons name="chevron-back" size={26} color={colors.primary[500]} />
    </Pressable>
  );
}

export default HeaderBackButton;
