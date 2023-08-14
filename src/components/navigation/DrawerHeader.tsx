import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "@src/hooks/useAppDispatch";
import { DrawerParamList } from "@src/navigation/drawer/Drawer.params";
import { setLogout } from "@src/services/auth/auth.slice";
import { HStack, useTheme } from "native-base";
import { Pressable } from "react-native";
import { Bars3Icon, ArrowLeftOnRectangleIcon } from "react-native-heroicons/solid";

function DrawerHeader() {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <HStack safeAreaTop py="3" px="3" justifyContent="space-between" alignItems="center" w="100%" bg="white">
      <Pressable onPress={navigation.openDrawer}>
        <Bars3Icon size={25} color={colors.primary[500]} />
      </Pressable>

      <Pressable onPress={() => dispatch(setLogout())}>
        <ArrowLeftOnRectangleIcon size={25} color={colors.primary[500]} />
      </Pressable>
    </HStack>
  );
}

export default DrawerHeader;
