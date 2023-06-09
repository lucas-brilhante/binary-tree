import { Node, Tree } from "./tree.types";

export class BinaryTree implements Tree{
  node;

  constructor(node?: Node) {
    this.node = node;
  }

  addNode(value: number) {
    if (!this.node) {
      this.node = { value };
      return;
    }

    let currentNode: Node | undefined = this.node;

    while (currentNode !== undefined) {
      if (value > currentNode.value && !currentNode.rightNode) {
        currentNode.rightNode = { value };
        break;
      }

      if (value <= currentNode.value && !currentNode.leftNode) {
        currentNode.leftNode = { value };
        break;
      }

      if (value > currentNode.value) {
        currentNode = currentNode.rightNode;
        continue;
      }

      currentNode = currentNode.leftNode;
    }
  }
}
