import { useState } from "react";
import type { TreeNode, useBinaryTreeParams } from "./use-binary-tree.types";

export const useBinaryTree = (props?: useBinaryTreeParams) => {
  const [tree, setTree] = useState<TreeNode | undefined>(props?.initialState);

  const addNode = (value: number) => {
    const treeClone = tree ? { ...tree } : undefined;

    if (!treeClone) {
      setTree({ value });
      return;
    }

    let currentNode: TreeNode | undefined = treeClone;

    while (currentNode !== undefined) {
      if (value > currentNode.value && !currentNode.rightNode) {
        currentNode.rightNode = { value };
        break;
      }

      if (value <= currentNode.value && !currentNode.leftNode) {
        currentNode.leftNode = { value };
        break;
      }

      if (value > currentNode.value) {
        currentNode = currentNode.rightNode;
        continue;
      }

      currentNode = currentNode.leftNode;
    }

    setTree(treeClone);
  };

  return { tree, addNode };
};
