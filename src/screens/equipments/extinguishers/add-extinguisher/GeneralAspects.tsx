import Stepper from "@src/components/common/UI/stepper/Stepper";
import Input from "@src/components/common/controlledInputs/input/Input";
import { useAppDispatch } from "@src/hooks/useAppDispatch";
import { useAppSelector } from "@src/hooks/useAppSelector";
import { updateExtinguisherValues } from "@src/services/extinguishers/add-extinguisher.slice";
import { Box, Button, Stack } from "native-base";
import { useForm } from "react-hook-form";
import { IAddExtinguisherValues, IGeneralASpects } from "./AddExtinguisher.interfaces";
import ScrollScreen from "@src/components/common/utils/ScrollScreen";
import { EquipmentsScreenNames } from "@src/navigation/equipments/Equipments.screen-names";
import { ADD_EXTINGUISHER_STEPS } from "@src/constants/STEPS";

function GeneralAspects({ navigation }: IGeneralASpects) {
  const addExtinguisherValues = useAppSelector((state) => state.addExtinguisher);
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<IAddExtinguisherValues>({
    defaultValues: addExtinguisherValues,
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(updateExtinguisherValues(data));
    navigation.navigate(EquipmentsScreenNames.ADD_EXTINGUISHER_TECH_ASPECTS);
  });

  return (
    <ScrollScreen>
      <Stepper steps={ADD_EXTINGUISHER_STEPS} currentStep={1} />
      <Stack marginTop="6">
        <Input name="qrCode" control={control} label="QR" disabled />
        <Box marginY={2} />
        <Input name="location" control={control} label="Ubicación" />
        <Box marginY={2} />
        <Input name="subLocation" control={control} label="Sub-ubicación" />
        <Box marginY={2} />
        <Input name="type" control={control} label="Tipo" />
        <Box marginY={2} />
        <Input name="brand" control={control} label="Marca" />
        <Box marginY={2} />
        <Input name="serialNumber" control={control} label="Número de serie" />
        <Box marginY={2} />
        <Input name="state" control={control} label="Estado" />
        <Box marginY={4} />
        <Button onPress={onSubmit} _text={{ fontWeight: 600 }} bgColor="primary.500" size="md">
          Continuar
        </Button>
      </Stack>
    </ScrollScreen>
  );
}

export default GeneralAspects;
