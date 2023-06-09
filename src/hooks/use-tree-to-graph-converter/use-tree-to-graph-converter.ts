import { RawNodeDatum } from "react-d3-tree";
import { TreeNode } from "../use-binary-tree";
import type { UseConvertTreeToGraphReturn } from "./types";

export const useTreeToGraphConverter = (tree?: TreeNode) => {
  const graphData = (node?: TreeNode): UseConvertTreeToGraphReturn => {
    if (!node) return undefined;

    const { value, leftNode, rightNode } = node;
    const leftChild = graphData(leftNode);
    const rightChild = graphData(rightNode);
    const children = [leftChild, rightChild].map((children) => {
      if (!children) {
        return { name: "null" };
      }
      return children;
    }) as RawNodeDatum[];
    const obj = {
      name: String(value),
      ...(children.length > 0 && { children: children }),
    };
    return obj;
  };

  return graphData(tree);
};
