import { Select as NativeSelect, Text } from "native-base";
import { FieldValues, useController } from "react-hook-form";
import { RhfSelectProps } from "./Select.interfaces";

function Select<T extends FieldValues>({ control, label, placeholder, name, options = [], ...rest }: RhfSelectProps<T>) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  const onSelectChange = (value: string) => {
    const valueAsNumber = Number(value);
    if (Number.isNaN(valueAsNumber)) {
      onChange(value);
    } else {
      onChange(valueAsNumber);
    }
  };

  return (
    <>
      {label && <Text fontWeight={600}>{label}</Text>}
      <NativeSelect
        _actionSheet={{ useRNModal: true }}
        style={{ height: 40 }}
        defaultValue={value}
        placeholder={placeholder}
        {...rest}
        onValueChange={onSelectChange}
      >
        {options.map((option, index) => (
          <NativeSelect.Item key={index} label={option.label} value={option.value} />
        ))}
      </NativeSelect>
    </>
  );
}

export default Select;
