import { KeyboardAvoiderScrollView } from "@good-react-native/keyboard-avoider";
import { SafeAreaView, View } from "react-native";
import { styles } from "./Screen.styles";
import { IScreenProps } from "./Screen.interfaces";

function ScrollScreen({ children, containerStyle }: IScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoiderScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardDismissMode="on-drag">
        <View style={[styles.container, containerStyle]}>{children}</View>
      </KeyboardAvoiderScrollView>
    </SafeAreaView>
  );
}

export default ScrollScreen;
