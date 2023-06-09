// @ts-nocheck
import { useState } from "react";
import _ from "lodash";
import type { TreeNode, useBinaryTreeParams } from "./use-binary-tree.types";

export const useBinaryTree = (props?: useBinaryTreeParams) => {
  const [tree, setTree] = useState<TreeNode | undefined>(props?.initialState);

  const addNode = (value: number) => {
    const treeClone = tree ? _.cloneDeep(tree) : undefined;

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

  const removeNode = (node: TreeNode) => {
    if (!node.leftNode && !node.rightNode) {
      return undefined;
    }

    let currentNode: TreeNode | undefined = _.cloneDeep(node);
    let parentNode: TreeNode | undefined;
    let newTree = currentNode;

    if (currentNode.leftNode) {
      currentNode = currentNode.leftNode;
      while (currentNode?.rightNode !== undefined) {
        parentNode = currentNode;
        currentNode = currentNode.rightNode;
      }

      if (parentNode) {
        parentNode.rightNode = currentNode.leftNode;
      } else {
        newTree.leftNode = currentNode.leftNode;
      }

      newTree.value = currentNode.value;
      return newTree;
    }

    // Replace node for another from right side

    currentNode = currentNode.rightNode;
    while (currentNode?.leftNode !== undefined) {
      parentNode = currentNode;
      currentNode = currentNode.leftNode;
    }

    if (parentNode) {
      parentNode.leftNode = currentNode?.rightNode;
    } else {
      newTree.rightNode = currentNode?.rightNode;
    }

    newTree.value = currentNode.value;
    return newTree;
  };

  const removeNodeByValue = (value: number) => {
    const treeClone = tree ? _.cloneDeep(tree) : undefined;
    if (!treeClone) {
      return;
    }

    if (value === treeClone.value) {
      const newTree = removeNode(treeClone);
      setTree(newTree);
      return;
    }

    let currentNode: TreeNode | undefined = treeClone;

    while (currentNode !== undefined) {
      if (value > currentNode.value) {
        if (currentNode?.rightNode?.value === value) {
          currentNode.rightNode = removeNode(currentNode.rightNode);
          break;
        }
        currentNode = currentNode.rightNode;
        continue;
      }

      if (currentNode?.leftNode?.value === value) {
        currentNode.leftNode = removeNode(currentNode.leftNode);
        break;
      }
      currentNode = currentNode.leftNode;
    }

    setTree(treeClone);
  };

  const clearTree = () => {
    setTree(undefined);
  };

  return { tree, addNode, removeNodeByValue, clearTree };
};
