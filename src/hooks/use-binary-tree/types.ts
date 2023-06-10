export interface TreeNode {
  value: number;
  leftNode?: TreeNode;
  rightNode?: TreeNode;
}

export interface TreeSnapshot {
  id: number;
  value: number;
  action: "add" | "delete";
  tree?: TreeNode;
}
