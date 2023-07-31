import { SafeAreaView, View } from "react-native";
import { IScreenProps } from "./Screen.interfaces";
import { styles } from "./Screen.styles";

function Screen({ children, containerStyle }: IScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;
