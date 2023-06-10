import { useState } from "react";
import _ from "lodash";
import type { TreeNode, TreeSnapshot } from "./types";

export const useBinaryTree = () => {
  const [treeSnapshots, setTreeSnapshots] = useState<TreeSnapshot[]>([]);

  const addNode = (value: number, snapshotIndex: number) => {
    const newSnapshots = treeSnapshots.slice(0, snapshotIndex + 1);
    const selectedSnapshot = treeSnapshots[snapshotIndex];
    const treeClone = selectedSnapshot
      ? _.cloneDeep(selectedSnapshot.tree)
      : undefined;

    const snapshotId = snapshotIndex + 1;

    if (!treeClone) {
      setTreeSnapshots([
        {
          id: snapshotId,
          value,
          action: "add",
          tree: { value },
        },
      ]);
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

    const newSnapshot: TreeSnapshot = {
      id: snapshotId,
      value,
      action: "add",
      tree: treeClone,
    };

    setTreeSnapshots([...newSnapshots, newSnapshot]);
  };

  /*const removeNode = (node: TreeNode) => {
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
  }; */

  const clearTree = () => {
    setTreeSnapshots([]);
  };

  return { treeSnapshots, addNode, clearTree };
};
