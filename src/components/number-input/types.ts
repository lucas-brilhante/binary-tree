import type { InputProps } from "@chakra-ui/react";

export type NumberInputProps = Omit<InputProps, "onChange" | "value"> & {
  value?: number;
  onChange: (value?: number) => void;
};
