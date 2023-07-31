import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth/AuthNavigator";
import { useAppSelector } from "@src/hooks/useAppSelector";
import RootNavigator from "./root/RootNavigator";

function MainNavigator() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return <NavigationContainer>{!isAuthenticated ? <AuthNavigator /> : <RootNavigator />}</NavigationContainer>;
}

export default MainNavigator;
