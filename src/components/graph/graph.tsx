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
      collapsible={false}
      orientation="vertical"
      translate={{
        x: container ? container.clientWidth / 2 : window.innerWidth / 2,
        y: 30,
      }}
      pathClassFunc={(path) => {
        if (path.target.data.name === "null") {
          return styles.invisible;
        }
        return undefined;
      }}
      renderCustomNodeElement={({ nodeDatum, toggleNode }) => {
        if (nodeDatum.name === "null") return undefined;
        return (
          <g>
            <circle cx="0" cy="10" r="10" fill="blue" onClick={toggleNode} />
            <text fill="blue" strokeWidth="1" x="20">
              {nodeDatum.name}
            </text>
          </g>
        );
      }}
    />
  );
};
