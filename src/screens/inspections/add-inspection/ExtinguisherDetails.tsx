import ScrollScreen from "@src/components/common/utils/ScrollScreen";
import { useForm } from "react-hook-form";
import { IAddInspectionValues } from "./AddInspection.interfaces";
import Stepper from "@src/components/common/UI/stepper/Stepper";
import { ADD_INSPECTION_STEPS } from "@src/constants/STEPS";
import { Box, Stack } from "native-base";
import Select from "@src/components/common/controlledInputs/select/Select";

const VISIBILITY_OPTIONS = [
  { label: "Visible", value: "1" },
  { label: "Poco visible", value: "2" },
  { label: "No visible", value: "3" },
];

function ExtinguisherDetails() {
  const { control, handleSubmit } = useForm<IAddInspectionValues>({
    defaultValues: {
      // Extinguisher details
      equipmentDetailid: null,
      internalCode: 0,
      qrCode: 0,
      manometer: 0,
      manometerReading: 0,
      determinedLoad: 0,
      hose: 0,
      nozzle: 0,
      cornet: 0,
      label: 0,
      sure: 0,
      hoseHolder: 0,
      paint: 0,
      instructions: 0,
      gripHandle: 0,
      conditioner: 0,
      // Control details
      controlCard: 0,
      testEquipment: 0,
      updateEquipment: 0,
      // Installation details
      visibility: 0,
      signaling: 0,
      access: 0,
      hook: 0,
    },
  });

  return (
    <ScrollScreen>
      <Stepper currentStep={1} steps={ADD_INSPECTION_STEPS} />
      <Stack mt="4">
        <Select label="Extintor" name="equipmentDetailid" control={control} options={[{ label: "Extintor 1", value: "1" }]} />
        <Box marginY={2} />
        <Select label="Código interno" name="internalCode" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Código QR" name="qrCode" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Manómetro" name="manometer" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Lectura de manómetro" name="manometerReading" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Carga determinada" name="determinedLoad" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Manguera" name="hose" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Boquilla" name="nozzle" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Corneta" name="cornet" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Márchamo" name="label" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Seguro" name="sure" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Porta manguera" name="hoseHolder" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Pintura" name="paint" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Instrucciones" name="instructions" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Manija de sujeción" name="gripHandle" control={control} options={VISIBILITY_OPTIONS} />
        <Box marginY={2} />
        <Select label="Acondicionador" name="conditioner" control={control} options={VISIBILITY_OPTIONS} />
      </Stack>
    </ScrollScreen>
  );
}

export default ExtinguisherDetails;
