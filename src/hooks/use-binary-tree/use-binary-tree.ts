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

  const removeSindleNode = (node: TreeNode) => {
    if (!node.leftNode && !node.rightNode) {
      return undefined;
    }

    let newNode = undefined;

    if(node.leftNode){
      newNode = node.leftNode;
      while(newNode.rightNode !== undefined){
        newNode = newNode.rightNode
      }

      newNode.rightNode = node.rightNode;
      return newNode;
    }
  };

  const removeNode = (value: number) => {
    const treeClone = tree ? { ...tree } : undefined;

    if (!treeClone) {
      return;
    }

    if (value === treeClone.value) {
      const newTree = removeSindleNode(treeClone);
      setTree(newTree);
      return;
    }

    let currentNode: TreeNode | undefined = treeClone;

    while (currentNode !== undefined) {
      if (value === currentNode.value) {
        setTree(undefined);
        break;
      }

      if (value > currentNode.value) {
        currentNode = currentNode.rightNode;
        continue;
      }

      currentNode = currentNode.leftNode;
    }
  };

  const clearTree = () =>{
    setTree(undefined);
  }

  return { tree, addNode, removeNode, clearTree };
};
