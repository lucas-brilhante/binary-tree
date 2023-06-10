import Tree from "react-d3-tree";
import { Box, Center, Text } from "@chakra-ui/react";
import { MaxWidthLimiter } from "../max-width-limiter";
import { useTreeToGraphConverter } from "../../hooks/use-tree-to-graph-converter";
import styles from "./graph.module.css";
import { TreeNode } from "../../hooks/use-binary-tree";
import { useRef } from "react";

interface GraphProps {
  tree?: TreeNode;
}

export const Graph = ({ tree }: GraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = useTreeToGraphConverter(tree);
  const container = document.getElementById("treeWrapper");

  if (!data)
    return (
      <MaxWidthLimiter>
        <Center ref={containerRef} width="100%" padding="16">
          <Text as="samp">Empty Tree</Text>
        </Center>
      </MaxWidthLimiter>
    );

  return (
    <MaxWidthLimiter>
      <Box
        ref={containerRef}
        height={container ? container.clientHeight : 1}
        background="white"
        width="100%"
      >
        <Tree
          data={data}
          collapsible={false}
          orientation="vertical"
          nodeSize={{ x: 80, y: 60 }}
          translate={{
            x: containerRef.current ? containerRef.current.clientWidth / 2 : 0,
            y: 30,
          }}
          pathClassFunc={(path) => {
            if (path.target.data.name === "null") {
              return styles.invisible;
            }
            return "";
          }}
          renderCustomNodeElement={({ nodeDatum, toggleNode }) => {
            if (nodeDatum.name === "null") return <div />;
            return (
              <g>
                <circle
                  cx="0"
                  cy="10"
                  r="10"
                  fill="blue"
                  onClick={toggleNode}
                />
                <text fill="blue" strokeWidth="1" x="20">
                  {nodeDatum.name}
                </text>
              </g>
            );
          }}
        />
      </Box>
    </MaxWidthLimiter>
  );
};
