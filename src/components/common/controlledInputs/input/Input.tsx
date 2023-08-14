import { Input as BaseInput, Text } from "native-base";
import { FieldValues, useController } from "react-hook-form";
import { RhfInputProps } from "./Input.interfaces";
import { styles } from "./Input.styles";
import { View } from "react-native";

function Input<T extends FieldValues>({ name, label, placeholder, control, containerStyles, disabled, ...rest }: RhfInputProps<T>) {
  const { field } = useController<T>({
    name,
    control,
  });

  return (
    <View style={[styles.container, containerStyles]}>
      {label && <Text fontWeight={600}>{label}</Text>}
      <BaseInput
        padding={3}
        w="100%"
        placeholder={placeholder}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        isDisabled={disabled}
        {...rest}
      />
    </View>
  );
}

export default Input;
