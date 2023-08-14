import { Checkbox } from "native-base";
import { FieldValues, useController } from "react-hook-form";
import { rhfCheckboxGroupProps } from "./CheckboxGroup.interfaces";

function CheckboxGroup<T extends FieldValues>({ control, name, checkboxes }: rhfCheckboxGroupProps<T>) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <Checkbox.Group
      defaultValue={field.value}
      onChange={(values) => {
        field.onChange(values || []);
      }}
    >
      {checkboxes.map((checkbox) => (
        <Checkbox my={2} value={checkbox.value} key={checkbox.value}>
          {checkbox.label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
}

export default CheckboxGroup;
