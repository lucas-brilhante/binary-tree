import { Graph } from "./components/graph";
import { Header } from "./components/header";
import { useBinaryTree } from "./hooks/use-binary-tree";

const dummy = {
  value: 8,
  leftNode: {
    value: 4,
    leftNode: {
      value: 2,
      rightNode: {
        value: 3,
      },
    },
    //rightNode: {
    //  value: 5,
    //},
  },
  rightNode: {
    value: 12,
    leftNode: {
      value: 10,
      leftNode: {
        value: 9,
      },
      rightNode: {
        value: 11,
      },
    },
    rightNode: {
      value: 14,
    },
  },
};

function App() {
  const { tree, addNode, removeNode, clearTree } = useBinaryTree({
    initialState: dummy,
  });
  console.log("tree", tree);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header addNode={addNode} removeNode={removeNode} clearTree={clearTree} />
      <div
        id="treeWrapper"
        style={{ display: "flex", flex: 1, height: 500, marginTop: 24 }}
      >
        <Graph tree={tree} />
      </div>
    </div>
  );
}

export default App;
