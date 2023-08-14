import { useAppSelector } from "@src/hooks/useAppSelector";
import { Box, Button, Stack, useTheme } from "native-base";
import { useForm } from "react-hook-form";
import { IAddExtinguisherValues, ITechnicalASpects } from "./AddExtinguisher.interfaces";
import Stepper from "@src/components/common/UI/stepper/Stepper";
import Input from "@src/components/common/controlledInputs/input/Input";
import { Text } from "native-base";
import CheckboxGroup from "@src/components/common/controlledInputs/checkbox/CheckboxGroup";
import { ADD_EXTINGUISHER_STEPS } from "@src/constants/STEPS";
import ScrollScreen from "@src/components/common/utils/ScrollScreen";
import { useAppDispatch } from "@src/hooks/useAppDispatch";
import { updateExtinguisherValues } from "@src/services/extinguishers/add-extinguisher.slice";
import { EquipmentsScreenNames } from "@src/navigation/equipments/Equipments.screen-names";

function TechnicalAspects({ navigation }: ITechnicalASpects) {
  const addExtinguisherValues = useAppSelector((state) => state.addExtinguisher);
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const { control, handleSubmit } = useForm<IAddExtinguisherValues>({
    defaultValues: addExtinguisherValues,
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(updateExtinguisherValues(data));
    navigation.navigate(EquipmentsScreenNames.ADD_EXTINGUISHER_KEY_DATES);
  });

  return (
    <ScrollScreen>
      <Stepper steps={ADD_EXTINGUISHER_STEPS} currentStep={2} />
      <Stack marginTop="6">
        <Input name="className" control={control} label="Clase" />
        <Box my={2} />
        <Input name="capacity" control={control} label="Capacidad" />
        <Box my={2} />
        <Input name="agent" control={control} label="Agente extintor" />
        <Box my={4} />
        <Text fontWeight={600} fontSize="lg">
          Accesorios
        </Text>
        <CheckboxGroup
          name="accessories"
          control={control}
          checkboxes={[
            { label: "Manguera", value: "hose" },
            { label: "Boquilla", value: "nozzle" },
            { label: "Corneta", value: "cornet" },
            { label: "Piton", value: "piton" },
            { label: "Bracket vehículo", value: "vehicle bracket" },
            { label: "Porta manguera", value: "hose holder" },
          ]}
        />
        <Stack marginTop={6}>
          <Button onPress={onSubmit}>Continuar</Button>
          <Button onPress={navigation.goBack} shadow="1" bg="white" mt={3} _text={{ color: colors.primary[500] }}>
            Regresar
          </Button>
        </Stack>
      </Stack>
    </ScrollScreen>
  );
}

export default TechnicalAspects;
