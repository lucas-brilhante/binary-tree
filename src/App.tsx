import { Graph } from "./components/graph";
import { Header } from "./components/header";
import { useBinaryTree } from "./hooks/use-binary-tree";

function App() {
  const {tree, addNode} = useBinaryTree();
  console.log('tree', tree)

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header addNode={addNode}/>
      <div
        id="treeWrapper"
        style={{ display: 'flex', flex: 1,height:500, marginTop: 24 }}
      >
        <Graph tree={tree} />
      </div>
    </div>
  );
}

export default App;
