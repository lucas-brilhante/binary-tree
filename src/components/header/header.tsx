import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Text, Button, Stack, Spacer, useToast, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { MaxWidthLimiter } from "../max-width-limiter";
import { NumberInput } from "../number-input";

interface HeaderProps {
  addNode: (value: number) => void;
  removeNode: (value: number) => void;
  clearTree: () => void;
}

export const Header = ({ addNode, removeNode, clearTree }: HeaderProps) => {
  const toast = useToast();
  const addInputRef = useRef<HTMLInputElement>(null);
  const removeInputRef = useRef<HTMLInputElement>(null);
  const [addInputValue, setAddInputValue] = useState<number>();
  const [removeInputValue, setRemoveInputValue] = useState<number>();

  const handleAdd = () => {
    try {
      const valueAsNumber = Number(addInputValue);
      addNode(valueAsNumber);
      setAddInputValue(undefined);
      addInputRef.current?.focus();
    } catch (error) {
      const err = error as Error;
      toast({
        title: err.name,
        description: err.message,
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const handleRemove = () => {
    try {
      const valueAsNumber = Number(removeInputValue);
      removeNode(valueAsNumber);
      setRemoveInputValue(undefined);
      removeInputRef.current?.focus();
    } catch (error) {
      const err = error as Error;
      toast({
        title: err.name,
        description: err.message,
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <Box height="16" width="100%" background="blue.400">
      <MaxWidthLimiter>
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          height="16"
          width="100%"
        >
          <Stack direction="column" spacing={4}>
            <Text
              fontSize="24"
              as="b"
              color="purple.900"
              textShadow="1px 1px 1px white"
            >
              Binary Tree
            </Text>
            <Text fontSize="sm" as="sup" color="gray.100">
              Data Structure
            </Text>
          </Stack>
          <Spacer />
          <Stack direction="row" spacing={1}>
            <NumberInput
              ref={addInputRef}
              value={addInputValue}
              onChange={setAddInputValue}
            />
            <Button onClick={handleAdd} leftIcon={<AddIcon />}>
              Add
            </Button>
          </Stack>
          <Stack direction="row" spacing={1}>
            <NumberInput
              ref={removeInputRef}
              value={removeInputValue}
              onChange={setRemoveInputValue}
            />
            <Button onClick={handleRemove} size="md" leftIcon={<DeleteIcon />}>
              Remove
            </Button>
          </Stack>
          <Button
            onClick={clearTree}
            size="md"
            marginLeft="4"
            colorScheme="red"
          >
            Clear
          </Button>
        </Stack>
      </MaxWidthLimiter>
    </Box>
  );
};
