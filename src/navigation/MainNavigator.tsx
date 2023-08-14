import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth/AuthNavigator";
import { useAppSelector } from "@src/hooks/useAppSelector";
import DrawerNavigator from "./drawer/DrawerNavigator";

function MainNavigator() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return <NavigationContainer>{!isAuthenticated ? <AuthNavigator /> : <DrawerNavigator />}</NavigationContainer>;
}

export default MainNavigator;
