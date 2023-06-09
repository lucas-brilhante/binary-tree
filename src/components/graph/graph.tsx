// @ts-nocheck
import Tree from "react-d3-tree";
import { useConvertTreeToGraph } from "../../hooks/use-convert-tree-to-graph";
import styles from "./graph.module.css";

interface GraphProps {
  tree?: TreeNode;
}

export const Graph = ({ tree }: GraphProps) => {
  const data = useConvertTreeToGraph(tree);
  const container = document.getElementById("treeWrapper");

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
