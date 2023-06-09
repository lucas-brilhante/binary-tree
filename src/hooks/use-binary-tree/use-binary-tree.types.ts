export interface TreeNode {
    value: number;
    leftNode?: TreeNode;
    rightNode?: TreeNode;
}

export interface useBinaryTreeParams {
    initialState: TreeNode;
}

