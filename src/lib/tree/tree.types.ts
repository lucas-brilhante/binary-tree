export interface Node {
    value: number;
    leftNode?: Node;
    rightNode?: Node;
}

export interface Tree {
    node?: Node;
    addNode: (value: number) => void;
}