import Stepper from "@src/components/common/UI/stepper/Stepper";
import { ADD_EXTINGUISHER_STEPS } from "@src/constants/STEPS";
import { Box, Button, Divider, Stack, Text, useTheme } from "native-base";
import { useForm } from "react-hook-form";
import { IAddExtinguisherValues, IKeyDates } from "./AddExtinguisher.interfaces";
import { useAppSelector } from "@src/hooks/useAppSelector";
import DateInput from "@src/components/common/controlledInputs/dateInput/DateInput";
import ScrollScreen from "@src/components/common/utils/ScrollScreen";

function KeyDates({ navigation }: IKeyDates) {
  const addExtinguisherValues = useAppSelector((state) => state.addExtinguisher);
  const { colors } = useTheme();

  const { handleSubmit, control } = useForm<IAddExtinguisherValues>({
    defaultValues: addExtinguisherValues,
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <ScrollScreen>
      <Stepper steps={ADD_EXTINGUISHER_STEPS} currentStep={3} />
      <Text mt="3" fontSize="lg" fontWeight={600}>
        Fechas claves
      </Text>
      <Stack marginTop="6">
        <DateInput label="Última prueba hidrostática" name="lastHydraulicTest" control={control} />
        <Box marginTop="2" />
        <DateInput label="Próxima prueba hidrostática" name="nextHydraulicTest" control={control} disabled />
        <Box marginY="6">
          <Divider />
        </Box>
        <DateInput label="Última inspección" name="lastVisualInspection" control={control} />
        <Box marginTop="2" />
        <DateInput label="Próxima inspección" name="nextVisualInspection" control={control} disabled />
        <Box marginY="6">
          <Divider />
        </Box>
        <DateInput label="Última recarga" name="lastRecharge" control={control} />
        <Box marginTop="2" />
        <DateInput label="Próxima recarga" name="nextRecharge" control={control} disabled />
        <Stack marginTop="6">
          <Button onPress={onSubmit}>Continuar</Button>
          <Button onPress={navigation.goBack} shadow="1" bg="white" mt={3} _text={{ color: colors.primary[500] }}>
            Regresar
          </Button>
        </Stack>
      </Stack>
    </ScrollScreen>
  );
}

export default KeyDates;
