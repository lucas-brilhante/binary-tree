import { useState } from "react";
import { BinaryTree } from "../../lib/tree/tree";
import { Graph } from "../graph";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [tree] = useState(new BinaryTree());

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleAdd = () => {
    const valueAsNumber = Number(inputValue);
    tree.addNode(valueAsNumber);
    setInputValue("");
  };

  return (
    <header>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAdd}>Adicionar</button>
      <div
        id="treeWrapper"
        style={{ width: "100%", height: 1000, marginTop: 24 }}
      >
        <Graph tree={tree} />
      </div>
    </header>
  );
};
