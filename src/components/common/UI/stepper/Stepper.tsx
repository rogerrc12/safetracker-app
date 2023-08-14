import { Text } from "native-base";
import { Box } from "native-base";
import { View } from "react-native";
import { styles } from "./Stepper.styles";
import { IStepperProps } from "./Stepper.interfaces";
import { Fragment } from "react";

function Stepper({ currentStep, steps }: IStepperProps) {
  return (
    <View style={styles.stepper}>
      {steps.map((step, index) => {
        const active = currentStep === step.value;

        return (
          <Fragment key={index}>
            <Box
              mb={1}
              w={38}
              h={38}
              p="1"
              justifyContent="center"
              alignItems="center"
              rounded="full"
              borderWidth={1}
              borderColor={active ? "primary.500" : "gray.400"}
              bg={active ? "primary.500" : "transparent"}
            >
              <Text fontWeight={600} color={active ? "white" : "gray.400"}>
                {step.value?.toString()}
              </Text>
            </Box>
            <Text fontSize="xs" ml="2" mr="auto" color={active ? "primary.500" : "gray.500"} fontWeight={600}>
              {step.label}
            </Text>
          </Fragment>
        );
      })}
    </View>
  );
}

export default Stepper;
