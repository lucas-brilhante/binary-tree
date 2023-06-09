import { useState } from "react";
import styles from "./header.module.css";

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
    <header className={styles.header}>
      <input value={addInputValue} onChange={handleAddInputChange} />
      <button onClick={handleAdd}>Add</button>
      <input value={removeInputValue} onChange={handleRemoveInputChange} />
      <button onClick={handleRemove}>Remove</button>
      <button onClick={clearTree} style={{ marginLeft: 8 }}>
        Clear
      </button>
    </header>
  );
};
