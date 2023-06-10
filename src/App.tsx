import _ from "lodash";
import { useState, useEffect } from "react";
import { Graph } from "./components/graph";
import { Header } from "./components/header";
import { TreeSnapshot, useBinaryTree } from "./hooks/use-binary-tree";

function App() {
  const { treeSnapshots, addNode, /*removeNodeByValue,*/ clearTree } =
    useBinaryTree();
  const [selectedSnapshot, setSelectedSnapshot] = useState<TreeSnapshot>();

  useEffect(() => {
    // console.log("treeSnapshots", treeSnapshots);
    if (treeSnapshots.length > 0) {
      const lastSnapshot = _.last(treeSnapshots);
      setSelectedSnapshot(lastSnapshot);
    }
  }, [treeSnapshots]);

  const selectSnapShot = (snapshot: TreeSnapshot) => {
    setSelectedSnapshot(snapshot);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        addNode={(value) =>
          addNode(value, selectedSnapshot ? selectedSnapshot.id : -1)
        }
        // removeNode={removeNodeByValue}
        clearTree={clearTree}
      />
      <div>
        {treeSnapshots.map((snapshot) => {
          return (
            <button
              key={snapshot.id}
              onClick={() => {
                selectSnapShot(snapshot);
              }}
            >
              {snapshot.value + " " + snapshot.action[0]}
            </button>
          );
        })}
      </div>
      <div
        id="treeWrapper"
        style={{ display: "flex", flex: 1, height: 500, marginTop: 24 }}
      >
        <Graph tree={selectedSnapshot?.tree} />
      </div>
    </div>
  );
}

export default App;
