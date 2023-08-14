import Screen from "@src/components/common/utils/Screen";
import { Box, Button, Icon, Stack, Text } from "native-base";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { ILoginFormValues } from "./Login.interfaces";
import Input from "@src/components/common/controlledInputs/input/Input";
import { useAppDispatch } from "@src/hooks/useAppDispatch";
import { setCredentials } from "@src/services/auth/auth.slice";
import { useLoginMutation } from "@src/services/auth/auth.api";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

function Login() {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const { control, handleSubmit } = useForm<ILoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      // const accessToken = await login(data).unwrap();
      dispatch(setCredentials({ token: "accessToken", user: {} }));
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Screen>
      <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 16, flex: 1 }}>
        <Text fontWeight={600} fontSize="2xl">
          Iniciar sesión
        </Text>
        <Text>¡Bienvenido de nuevo!</Text>
        <Stack marginTop="10">
          <Input
            name="username"
            label="Correo"
            placeholder="Ingresa tu correo"
            control={control}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="off"
          />
          <Box marginY={2} />
          <Input
            name="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            control={control}
            secureTextEntry={!showPassword}
            InputRightElement={
              <Icon
                onPress={() => setShowPassword((prev) => !prev)}
                as={Feather}
                name={showPassword ? "eye-off" : "eye"}
                size="md"
                mr="3"
                color="gray.400"
              />
            }
          />
          <Box marginY={2} />
          <Text underline color="primary.500">
            ¿Olvidaste tu contraseña?
          </Text>
          <Box marginY={4} />
          <Button onPress={onSubmit} _text={{ fontWeight: 600 }} bgColor="primary.500" size="md" isLoading={isLoading}>
            Acceder
          </Button>
        </Stack>
      </View>
    </Screen>
  );
}

export default Login;
