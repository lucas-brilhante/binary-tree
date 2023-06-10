import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Text, Button, Input, Stack, Spacer } from "@chakra-ui/react";
import { useState } from "react";

interface HeaderProps {
  addNode: (value: number) => void;
  removeNode: (value: number) => void;
  clearTree: () => void;
}

export const Header = ({ addNode, removeNode, clearTree }: HeaderProps) => {
  const [addInputValue, setAddInputValue] = useState("");
  const [removeInputValue, setRemoveInputValue] = useState("");

  const handleAddInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { value } = e.target;
    setAddInputValue(value);
  };

  const handleRemoveInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { value } = e.target;
    setRemoveInputValue(value);
  };

  const handleAdd = () => {
    const valueAsNumber = Number(addInputValue);
    addNode(valueAsNumber);
    setAddInputValue("");
  };

  const handleRemove = () => {
    const valueAsNumber = Number(removeInputValue);
    removeNode(valueAsNumber);
    setRemoveInputValue("");
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
        <Input
          width="48"
          value={addInputValue}
          onChange={handleAddInputChange}
          placeholder="Enter with a number..."
          background="white"
        />
        <Button onClick={handleAdd} leftIcon={<AddIcon />}>
          Add
        </Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Input
          width="48"
          value={removeInputValue}
          onChange={handleRemoveInputChange}
          placeholder="Enter with a number..."
          background="white"
        />
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
