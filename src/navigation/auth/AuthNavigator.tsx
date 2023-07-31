import { createStackNavigator } from "@react-navigation/stack";
import Login from "@src/screens/auth/Login.screen";
import { AuthNavigatorParams } from "./AuthNavigator.params";
import { AuthScreenNames } from "./AuthScreen.names";

const Stacks = createStackNavigator<AuthNavigatorParams>();

function AuthNAvigator() {
  return (
    <Stacks.Navigator initialRouteName={AuthScreenNames.LOGIN} screenOptions={{ headerShown: false }}>
      <Stacks.Screen name={AuthScreenNames.LOGIN} component={Login} />
    </Stacks.Navigator>
  );
}

export default AuthNAvigator;
