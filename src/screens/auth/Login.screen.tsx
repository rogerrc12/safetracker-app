import Screen from "@src/components/common/utils/Screen";
import { Box, Button, Stack, Text } from "native-base";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { ILoginFormValues } from "./Login.interfaces";
import Input from "@src/components/common/controlledInputs/Input";
import { useAppDispatch } from "@src/hooks/useAppDispatch";
import { setCredentials } from "@src/services/auth/auth.slice";

function Login() {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<ILoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    dispatch(setCredentials({ token: "123", user: {} }));
  });

  return (
    <Screen>
      <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 16, flex: 1 }}>
        <Text fontWeight={600} fontSize="2xl">
          Iniciar sesión
        </Text>
        <Text>¡Bienvenido de nuevo!</Text>
        <Stack marginTop="10">
          <Input name="email" label="Correo" placeholder="Ingresa tu correo" control={control} keyboardType="email-address" />
          <Box marginY={2} />
          <Input name="password" label="Contraseña" placeholder="Ingresa tu contraseña" control={control} />
          <Box marginY={2} />
          <Text underline color="primary">
            ¿Olvidaste tu contraseña?
          </Text>
          <Box marginY={4} />
          <Button onPress={onSubmit} _text={{ fontWeight: 600 }} bgColor="primary" size="md">
            Acceder
          </Button>
        </Stack>
      </View>
    </Screen>
  );
}

export default Login;
