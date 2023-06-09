import { Graph } from "./components/graph";
import { Header } from "./components/header";
import { useBinaryTree } from "./hooks/use-binary-tree";

function App() {
  const { tree, addNode, removeNodeByValue, clearTree } = useBinaryTree();

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        addNode={addNode}
        removeNode={removeNodeByValue}
        clearTree={clearTree}
      />
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
