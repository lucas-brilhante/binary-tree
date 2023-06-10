import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Text, Button, Stack, Spacer, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { NumberInput } from "../number-input";

interface HeaderProps {
  addNode: (value: number) => void;
  removeNode: (value: number) => void;
  clearTree: () => void;
}

export const Header = ({ addNode, removeNode, clearTree }: HeaderProps) => {
  const toast = useToast();
  const [addInputValue, setAddInputValue] = useState<number>();
  const [removeInputValue, setRemoveInputValue] = useState<number>();

  const handleAdd = () => {
    try {
      const valueAsNumber = Number(addInputValue);
      addNode(valueAsNumber);
      setAddInputValue(undefined);
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
    <Stack
      direction="row"
      alignItems="center"
      spacing={4}
      background="blue.400"
      height="16"
      width="100%"
      paddingX="4"
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
        <NumberInput value={addInputValue} onChange={setAddInputValue} />
        <Button onClick={handleAdd} leftIcon={<AddIcon />}>
          Add
        </Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <NumberInput value={removeInputValue} onChange={setRemoveInputValue} />
        <Button onClick={handleRemove} size="md" leftIcon={<DeleteIcon />}>
          Remove
        </Button>
      </Stack>
      <Button onClick={clearTree} size="md" marginLeft="4" colorScheme="red">
        Clear
      </Button>
    </Stack>
  );
};
