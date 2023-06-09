import { useState } from "react";
import styles from "./header.module.css";

interface HeaderProps {
  addNode: (value: number) => void;
}

export const Header = ({ addNode }: HeaderProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleAdd = () => {
    const valueAsNumber = Number(inputValue);
    addNode(valueAsNumber);
    setInputValue("");
  };

  return (
    <header className={styles.header}>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAdd}>Adicionar</button>
    </header>
  );
};
