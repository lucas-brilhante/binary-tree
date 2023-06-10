import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Graph } from "../../components/graph";
import { Header } from "../../components/header";
import { TreeSnapshot, useBinaryTree } from "../../hooks/use-binary-tree";

export const Home = () => {
  const { treeSnapshots, addNode, removeNodeByValue, clearTree } =
    useBinaryTree();
  const [selectedSnapshot, setSelectedSnapshot] = useState<TreeSnapshot>();
  const snapshotIndex = selectedSnapshot ? selectedSnapshot.id : -1;

  const handleClear = () => {
    clearTree();
    setSelectedSnapshot(undefined);
  };

  useEffect(() => {
    if (treeSnapshots.length > 0) {
      const lastSnapshot = _.last(treeSnapshots);
      setSelectedSnapshot(lastSnapshot);
    }
  }, [treeSnapshots]);

  return (
    <Flex direction="column" background="gray.100" minHeight="100vh">
      <Header
        addNode={(value) => addNode(value, snapshotIndex)}
        removeNode={(value) => removeNodeByValue(value, snapshotIndex)}
        clearTree={handleClear}
      />
      <Flex
        id="snapshotsWrapper"
        padding="2"
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.300"
        minHeight="65px"
      >
        <Text marginRight="2">Snapshots:</Text>
        <Stack direction="row" display="block">
          {treeSnapshots.map((snapshot, index) => {
            const isSnapshotSelected = snapshot.id === selectedSnapshot?.id;
            return (
              <>
                <Button
                  key={snapshot.id}
                  margin="1"
                  padding="0"
                  borderRadius="50%"
                  border={isSnapshotSelected ? "2px" : undefined}
                  borderColor="yellow"
                  boxShadow={
                    isSnapshotSelected ? "1px 1px 4px black" : undefined
                  }
                  colorScheme={snapshot.action === "add" ? "whatsapp" : "red"}
                  onClick={() => {
                    setSelectedSnapshot(snapshot);
                  }}
                >
                  {snapshot.value}
                </Button>
                {index !== treeSnapshots.length - 1 && (
                  <ArrowForwardIcon color="blue.700" />
                )}
              </>
            );
          })}
        </Stack>
      </Flex>
      <Box id="treeWrapper" flex="1">
        <Graph tree={selectedSnapshot?.tree} />
      </Box>
    </Flex>
  );
};