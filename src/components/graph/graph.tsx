// @ts-nocheck
import Tree from "react-d3-tree";
import styles from "./graph.module.css";
import { BinaryTree } from "../../lib/tree/tree";
import { Node as TreeNode } from "../../lib/tree/tree.types";

interface GraphProps {
  tree: BinaryTree;
}

interface Teste {
  name: string;
  children?: Teste[];
}

const graphData: Teste = (node?: TreeNode) => {
  if (!node) return undefined;

  const { value, leftNode, rightNode } = node;
  const leftChild = graphData(leftNode);
  const rightChild = graphData(rightNode);
  const children = [leftChild, rightChild].filter(Boolean);
  const obj = {
    name: String(value),
    ...(children.length > 0 && { children: children }),
  };
  return obj;
};

export const Graph = ({ tree }: GraphProps) => {
  const container = document.getElementById("treeWrapper");
  console.log('tree', tree.node)

  const data = graphData(tree.node);
  console.log('data', data)

  if (!data) return null;

  return (
    <Tree
      data={data}
      branchNodeClassName={styles.node}
      collapsible={false}
      orientation="vertical"
      translate={{
        x: container ? container.clientWidth / 2 : window.innerWidth / 2,
        y: 30,
      }}
    />
  );
};
