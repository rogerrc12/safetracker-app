import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Montserrat_300Light, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { useEffect } from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import store from "@src/store";
import MainNavigator from "@src/navigation/MainNavigator";
import theme from "@src/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Light": Montserrat_300Light,
    "Montserrat-Regular": Montserrat_400Regular,
    "Montserrat-SemiBold": Montserrat_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <MainNavigator />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </Provider>
  );
}
