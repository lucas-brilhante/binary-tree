import { Input } from "@chakra-ui/react";
import { forwardRef } from "react";
import { getOnlyNumbers } from "./get-only-numbers";
import type { NumberInputProps } from "./types";

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    const { value, onChange, placeholder } = props;

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
      event
    ) => {
      const { value } = event.target;
      const formattedValue = getOnlyNumbers(value);

      onChange(formattedValue ? Number(formattedValue) : undefined);
    };

    return (
      <Input
        ref={ref}
        width="48"
        value={value || ""}
        onChange={handleChange}
        placeholder={"Enter with a number..." || placeholder}
        background="white"
      />
    );
  }
);
